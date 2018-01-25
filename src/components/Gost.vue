<template>
  <div id="gist">
    <div v-if="files.length">
      <div class="author">
        <p>Created by <router-link :to="{'name': 'user', params:{name: data.data.user.username}}" class="bg link">{{data.data.user.username}}</router-link> at <code class="bg">{{data && $format(data.data.created_at)}}</code>
          <span class="pull-right raw-link btn btn-link"
            :data-clipboard-text="$route.params.name"
            @mouseover="initClipboard"
            @mouseout="destroyClipboard"
          >
            Copy DeleteId
          </span>
        </p>
      </div>
      <div class="description fade">
        <p>{{data.data.description}}</p>
      </div>
      <div v-for="(file, index) in files" :key="'file'+index">
        <div class="title">
          <span class="fade">{{file.filename}}</span>
          <a :href="`${apiLink}${$route.params.name}/${file.id}`" target="_blank" class="pull-right raw-link" rel="noopener">Raw</a>
          <span class="pull-right raw-link btn" @click="saveImage(index)">Save</span>
          <img src="/qrcode.svg" alt="qrcode" class="qrcode-icon pull-right" @click="showQRCode">
          <div class="pull-right btn"
           :data-clipboard-text="file.content"
           @mouseover="initClipboard"
           @mouseout="destroyClipboard"
          >
          <img src="/copy.svg" alt="copy" class="clippy" width="13">
          </div>
        </div>
        <div class="code-highlight" :id="'code'+index">
          <pre :class="'language-' + file.filename.split('.').pop()" ><code v-html="highlight(file)" :class="'language-' + file.filename.split('.').pop()">
          </code></pre>
        </div>
      </div>
    </div>
    <div v-else-if="msg" class="tip">
      <span>{{msg}}</span>
    </div>
    <div v-else class="tip">
      <span>Loading...</span>
    </div>
    <modal name="qrcode" :width="250" :height="250">
      <qrcode :value="currentUrl" :options="{ size: 200 }" class="qrcode"></qrcode>
    </modal>
  </div>
</template>

<script>
import { v4 } from 'uuid'
import domtoimage from 'dom-to-image'
import tinydate from 'tinydate'
import Clipboard from 'clipboard'
import toast from 'native-toast'
import { prism, mapping } from '../utils'

export default {
  name: 'gost',
  data() {
    return {
      data: '',
      files: [],
      msg: '',
      apiLink: process.env.API_URL + 'api/raw/gost/',
      clipboard: null,
      currentUrl: window.location.href
    }
  },
  mounted() {
    this.getData()
    // this.$modal.show('qrcode')
  },
  watch: {
    '$route'() {
      this.reset()
      this.getData()
    }
  },
  methods: {
    getData() {
      const hash = this.$route.params.name
      const baseUrl = 'api/gost/'
      if (!hash) {
        return
      }
      return this.$fetch(baseUrl + hash)
        .then(d => {
          const data = d.data
          if (!data.success) {
            this.msg = data.message
            return
          }
          this.data = data
          this.files = data.data.files
        })
    },
    highlight(file) {
      const extension = file.filename.split('.').pop()
      const lang = mapping[extension] || 'markup'
      const res = prism.highlight(file.content, prism.languages[lang])
      return res
    },
    reset() {
      this.data = ''
      this.files = []
      this.msg = ''
    },
    initClipboard({ currentTarget }) {
      this.clipboard = new Clipboard(currentTarget)

      this.clipboard.on('success', e => {
        toast({ message: `Copied !`, type: 'success' })
      })
      this.clipboard.on('error', e => {
        toast({ message: 'Failed to copy !', type: 'error' })
      })
    },
    destroyClipboard() {
      if (this.clipboard) {
        this.clipboard.destroy()
        this.clipboard = null
      }
    },
    showQRCode() {
      this.$modal.show('qrcode')
    },
    saveImage(index) {
      const dom = document.getElementById(`code${index}`)
      return dom && domtoimage.toPng(dom)
        .then(dataUrl => {
          const link = document.createElement('a')
          link.download = `gost-${v4()}.png`
          link.href = dataUrl
          document.body.appendChild(link)
          link.click()
          link.remove()
        })
    }
  }
}
</script>

<style src="native-toast/dist/native-toast.css"></style>
<style scoped>
  .title {
    border: 0.1em solid #eee;
    line-height: 34px;
    padding-left: 6px;
    background: #A5DEE4;
    border-radius: 0.3em;
  }
  .tip {
    background: rgba(241, 249, 241, 0.83);
    border: 0.1em solid #eee;
    line-height: 34px;
    padding-left: 6px;
    border-radius: 0.3em;
  }
  .author {
    padding-left: 6px;
    background: #FEDFE1;
    line-height: 40px;
    border-radius: 0.3em;
  }
  .description {
    padding-left: 6px;
    background: #A8D8B9;
    line-height: 32px;
    border-radius: 0.3em;
  }
  .bg {
    background-color: rgba(27,31,35,.05);
    padding: 0.2em 0.2em;
  }
  .link:hover {
    text-decoration-line: underline;
  }
  .pull-right {
    float: right;
    margin-right: 2%;
  }
  .raw-link {
    text-decoration-line: none;
    font-size: 80%;
    color: rgb(223, 117, 20);
  }
  code[class*="language-"],
  pre[class*="language-"] {
    background: #e9e9e9!important;
  }
  .clippy {
    margin-top: -3px;
    position: relative;
    top: 3px;
  }
  .btn {
    cursor: pointer;
  }
  .qrcode {
    margin: 25px;
  }
  .qrcode-icon {
    margin-top: -3px;
    position: relative;
    top: 7px;
    height: 25px;
    width: 16px;
    cursor: pointer;
  }
  .btn-link {
    color: #6A4C9C;
  }
</style>
