<template>
  <div id="gist">
    <div v-if="msg" class="tip">
      <span>Gist not exists!</span>
    </div>
    <div v-else>
      <div class="author">
        <p>Created by <code class="bg">{{data && data.msg.User.Username}}</code> at <code class="bg">{{data && format(data.msg.CreatedAt)}}</code>.</p>
      </div>
      <div class="description fade">
        <p>{{data && data.msg.description}}</p>
      </div>
      <div v-for="(file, index) in files" :key="'file'+index">
        <div class="title">
          <span class="fade">{{file.filename}}</span>
        </div>
        <pre><code v-html="highlight(file)" :class="file.filename.split('.').pop()" class="hljs">
        </code></pre>
      </div>
    </div>
  </div>
</template>

<script>
import hljs from 'highlight.js'
import axios from 'axios'
import dateFormat from 'dateformat'

export default {
  data() {
    return {
      data: '',
      files: [],
      msg: ''
    }
  },
  mounted() {
    const hash = this.$route.params.name
    if (hash) {
      const baseUrl = process.env.API_URL
      this.getData(baseUrl + hash)
    }
  },
  methods: {
    getData(url) {
      return axios.get(url)
        .then(d => {
          const data = d.data
          if (data.code !== 200) {
            this.msg = data.msg
            return
          }
          this.data = data
          this.files = data.msg.files
        })
    },
    highlight(file) {
      const extension = file.filename.split('.').pop()
      let res
      try {
        res = hljs.highlight(extension, file.content)
      } catch (err) {
        res =hljs.highlightAuto(file.content)
      }
      return res.value
    },
    format(date) {
      return dateFormat(date, 'yyyy-mm-dd, hh:MM TT')
    }
  }
}
</script>

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
</style>
