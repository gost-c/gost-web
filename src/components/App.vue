<template>
  <div id="app">
    <div class="container">
      <h1>Welcome to <code>gost</code></h1>
      <hr/>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<!-- CSS libraries -->
<style src="normalize.css/normalize.css"></style>
<style src="highlight.js/styles/rainbow.css"></style>

<!-- Global CSS -->
<style>
  code {
    font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
    font-size: 1em!important;
    white-space: pre-wrap;
    color: #2c3e50;
    border-radius: 0.3em;
  }
  html, body, #app {
    height: 100%;
  }
  hr {
    box-sizing: content-box;
    height: 0;
  }
  pre {
    margin-top: 0;
  }
</style>

<style>
  #app h1 {
    color: #2c3e50;
    font-weight: 300;
    margin: 0;
  }

  .container {
    min-height: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 4px;
    padding-left: 4px;
    background-color: #f6f6f6;
  }

  @media (min-width: 768px) {
      .container {
          padding-right: 15px;
          padding-left: 15px;
          width: 750px;
      }
      code {
        line-height: 1.2em;
      }
  }

  @media (min-width: 992px) {
      .container {
          width: 970px;
      }
  }

  @media (min-width: 1200px) {
      .container {
          width: 1170px;
      }
  }

  .banner {
    height: 200px;
    background-color: #f6f6f6;
    padding: 50px 10px;
  }

  .bottom {
    padding: 80px 10px;
    font-size: 24px;
    font-weight: 300;
  }

  .fade {
    font-size: 14px;
  }
</style>
