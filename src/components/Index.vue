<template>
  <div id="index">
    <div class="description section">
      <p><code>gost</code> 是一个可以快速分享代码、文档的服务，类似于 <a href="https://gist.github.com" target="_blank" class="link">gist</a>。并且它有自己的命令行客户端工具 <a href="https://github.com/gost-c/gost-cli" target="_blank" class="link">gost-cli</a>。</p>
      <p>由于核心后端和命令行都是由 <code>go语言</code> 写的， 所以取名 <code>gost</code> .</p>
      <p>项目主页 <a href="https://github.com/gost-c" target="_blank" class="link"> https://github.com/gost-c</a></p>
      <p>完整文档请查看<a href="http://gost-docs.congz.pw" target="_blank" class="link"> http://gost-docs.congz.pw</a></p>
    </div>
    <div class="section search">
      <p class="search-title">搜索用户所有 <code>gost</code> : </p>
      <input class="input" v-model="user" @keyup.enter="changeRouter('user')"/>
    </div>
    <div class="section search">
      <p class="search-title">搜索 <code>gost</code> : </p>
      <input class="input" v-model="hash" @keyup.enter="changeRouter('hash')"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      user: null,
      hash: null
    }
  },
  methods: {
    changeRouter(type) {
      if (type === 'user') {
        this.$router.push({ name: 'user', params: { name: this.user}})
      } else if (type === 'hash') {
        this.$router.push({ name: 'gost', params: { name: this.hash}})
      }
    }
  }
}
</script>

<style scoped>
  #index {
    height: 100%;
  }
  .description {
    background: #A8D8B9;
    color: #9E7A7A;
  }
  .section {
    padding: 2px 0 2px 6px;
    line-height: 24px;
    border-radius: 0.3em;
    margin: 20px 0 10px 0;
  }
  .search {
    background: #D7C4BB;
    padding-bottom: 20px;
  }
  .search-title {
    color: #434343;
    font-weight: 120;
  }
  .link {
    text-decoration-line: none;
    color: #DB4D6D;
  }
  .link:hover {
    text-decoration-line: underline;
  }
  .input {
    padding: .5em .6em;
    display: inline-block;
    border: 1px solid #ccc;
    box-shadow: inset 0 1px 3px #ddd;
    border-radius: 4px;
    vertical-align: middle;
    box-sizing: border-box;
    font-family: sans-serif;
    font-weight: 100;
    letter-spacing: 0.01em;
    line-height: normal;
    margin: 0;
    -webkit-appearance: textfield;
    background-color: white;
    -webkit-rtl-ordering: logical;
    user-select: text;
    cursor: auto;
    width: 98%;
  }

  @media (min-width: 768px) {
    .input {
      width: 40%;
    }
  }
</style>
