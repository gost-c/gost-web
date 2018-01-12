<template>
  <div id="app" :style="{background}">
    <div class="container">
      <div class="header">
        <h1 class="inline">Welcome to <router-link :to="{path: '/'}" class="link">gost</router-link></h1>
        <button class="pull-right button" @click="changeTheme">change theme</button>
      </div>
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
        background: bgc,
        theme: 'prism.css',
        themes: [
          'prism.css',
          'prism-coy.css',
          'prism-okaidia.css',
          'prism-solarizedlight.css',
          'prism-tomorrow.css',
          'prism-onedark.css'
        ]
      }
    },
    mounted() {
      const theme = localStorage.getItem('theme')
      if (theme && theme !== 'prism.css') {
        this.setTheme(theme)
      }
    },
    methods: {
      changeTheme() {
        const theme = this.randomTheme()
        this.setTheme(theme)
      },
      randomTheme() {
        const index = Math.floor(Math.random() * this.themes.length)
        const theme = this.themes[index]
        if (theme === this.theme) {
          return this.randomTheme()
        }
        return theme
      },
      async setTheme(theme) {
        const url = `/themes/${theme}`
        const data = await this.$axios(url)
        const styleEl = this.getThemeElm()
        styleEl.innerHTML = data.data
        this.theme = theme
        localStorage.setItem('theme', theme)
      },
      getThemeElm() {
        const themeId = 'theme'
        let styleEl = document.getElementById(themeId)
        if (styleEl) {
          return styleEl
        }
        styleEl = document.createElement('style')
        styleEl.id = themeId
        document.head.appendChild(styleEl)
        return styleEl
      }
    }
  }
</script>

<!-- CSS libraries -->
<style src="normalize.css/normalize.css"></style>
<style src="nprogress/nprogress.css"></style>
<style src="prismjs/themes/prism.css"></style>

<!-- Global CSS -->
<style>
  @import '../fonts/fira_code.css';
  code {
    font-family: Fira Code, Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif!important;
    font-size: 1em!important;
    font-variant-ligatures: contextual;
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
  .inline {
    display: inline;
  }
  .pull-right {
    float: right;
  }
  .button {
    background: rgb(66, 184, 221);
    padding: .5em 1em;
    border-radius: 4px;
    display: inline-block;
    zoom: 1;
    vertical-align: middle;
    color: #fff;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    font-weight: 100;
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
