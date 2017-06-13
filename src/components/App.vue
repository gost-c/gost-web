<template>
  <div id="app" :style="{background}">
    <div class="container">
      <h1>Welcome to <router-link :to="{path: '/'}" class="link">gost</router-link></h1>
      <hr/>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  const SL = ', 100%, 85%'
  const bgc = 'linear-gradient(to left bottom, ' +
    "hsl(" + (Math.floor(Math.random() * 255) + SL) + ") 0%," +
    "hsl(" + (Math.floor(Math.random() * 255) + SL) + ") 100%)"

  export default {
    name: 'app',
    data() {
      return {
        background: bgc
      }
    }
  }
</script>

<!-- CSS libraries -->
<style src="normalize.css/normalize.css"></style>
<style src="nprogress/nprogress.css"></style>
<style src="highlight.js/styles/rainbow.css"></style>

<!-- Global CSS -->
<style>
  code {
    font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
    font-size: 1em!important;
    /*white-space: pre-wrap;*/
    color: #2c3e50;
    border-radius: 0.3em;
  }
  html, body {
    height: 100%;
  }
  #app {
    min-height: 100%;
  }
  hr {
    box-sizing: content-box;
    height: 0;
  }
  pre {
    margin-top: 0;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s ease;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
  .link {
    text-decoration-line: none;
    color: #42b983;
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
