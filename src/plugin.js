import axios from 'axios'
import tinydate from 'tinydate'
import nprogress from 'nprogress'

const format = date => {
  return tinydate('{YYYY}-{MM}-{DD} {HH}:{mm}:{ss}')(new Date(date))
}

// fork from https://github.com/QingWei-Li/npmarket/blob/master/src/api.js

const instance = axios.create({
  baseURL: process.env.API_URL
})

instance.interceptors.request.use(config => {
  nprogress.start()
  return config
}, Promise.reject)

instance.interceptors.response.use(response => {
  nprogress.done()
  return response
}, Promise.reject)

export default function (Vue) {
  Vue.prototype.$fetch = instance
  Vue.prototype.$format = format
  Vue.prototype.$axios = axios
}
