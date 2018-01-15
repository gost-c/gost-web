<template>
  <div id="user">
    <div v-if="data.length">
      <div class="user">
        <p>User :  <code>{{$route.params.name}}</code> has <code>{{data && data.length}}</code> gost{{data && data.length > 1 ? 's' : ''}}.</p>
      </div>
      <div class="gost" v-for="(gost, index) in data" :key="'user-gost' + index" @click="handleClick(gost)">
        <div class="created-at fade">
          <p>Created at <code>{{$format(gost.created_at)}}</code></p>
        </div>
        <div class="description fade">
          <p>{{gost.description}}</p>
        </div>
        <div class="files fade">
          <p><code v-for="(file, i) in getFiles(gost.files)" :key="`gost-file-${index}-${i}`">{{file}} </code> </p>
        </div>
      </div>
    </div>
    <div v-else-if="msg" class="tip">
      <span>{{msg}}</span>
    </div>
    <div v-else class="tip">
      <span>Loading...</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'user',
  data() {
    return {
      data: {},
      msg: ''
    }
  },
  mounted() {
    this.getData()
  },
  watch: {
    '$route'() {
      this.reset()
      this.getData()
    }
  },
  methods: {
    getData(url) {
      const user = this.$route.params.name
      const baseUrl = '/api/gosts/'
      if (!user) {
        return
      }
      return this.$fetch(baseUrl + user)
        .then(d => {
          const data = d.data
          if (!data.success) {
            this.msg = data.message
            return
          }
          this.data = data.data.sort((a, b) => {
            return new Date(a.created_at).getTime() < new Date(b.created_at).getTime()
          })
        })
    },
    getFiles(files) {
      return Array.from([].slice.call(files), x => x.filename)
    },
    handleClick(gost) {
      this.$router.push({ name: 'gost', params: { name: gost.id }})
    },
    reset() {
      this.data = []
      this.msg = ''
    }
  }
}
</script>

<style scoped>
.tip {
    background: rgba(241, 249, 241, 0.83);
    border: 0.1em solid #eee;
    line-height: 34px;
    padding-left: 6px;
    border-radius: 0.3em;
  }
.description {
  padding-left: 6px;
  background: #A8D8B9;
  line-height: 32px;
  border-radius: 0.3em;
}
.user {
  padding-left: 6px;
  background: #FEDFE1;
  line-height: 40px;
  border-radius: 0.3em;
}
.files {
  border: 0.1em solid #eee;
  line-height: 20px;
  padding-left: 6px;
  background: #A5DEE4;
  border-radius: 0.3em;
}
.created-at {
  padding-left: 6px;
}
.gost {
  background: #FFFFFB;
  padding-top: 5px;
  padding-bottom: 8px;
  margin-bottom: 10px;
  border-radius: 0.3em;
  cursor: pointer;
}
</style>
