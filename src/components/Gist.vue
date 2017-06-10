<template>
  <div id="gist">
    <h2>gist, {{$route.params.name}}</h2>
    <pre><code v-html="data">
    </code></pre>
    <pre><code v-html="code" :class="language" class="hljs">
    </code></pre>
  </div>
</template>

<script>
import hljs from 'highlight.js'
import raw from 'raw-loader!../index.js'
export default {
  data() {
    return {
      data: '',
      code: '',
      language: 'js'
    }
  },
  mounted() {
    this.data = raw
    let res
    try {
      res = hljs.highlight(this.language, this.data)
    } catch (err) {
      res =hljs.highlightAuto(this.data)
    }
    this.code = res.value
  }
}
</script>
