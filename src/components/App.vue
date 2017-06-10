<template>
  <div id="app">
    <div class="container">
      <h1>Welcome to gost</h1>
      <h2 class="fade">zcong1993</h2>
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
<style src="highlight.js/styles/atom-one-dark.css"></style>

<!-- Global CSS -->
<style>
  pre code {
    font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
    font-size: 0.9em;
    white-space: pre-wrap;
    color: #2c3e50;
  }
  html, body, #app {
    height: 100%;
  }
</style>

<style>
  /*#app {
    text-align: center;
  }*/
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
    background-color: #f6f6f6;
  }

  @media (min-width: 768px) {
      .container {
          padding-right: 15px;
          padding-left: 15px;
          width: 750px;
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
