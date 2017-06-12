import axios from 'axios'
import tinydate from 'tinydate'

const format = date => {
  return tinydate('{YYYY}-{MM}-{DD} {HH}:{mm}:{ss}')(new Date(date))
}

export default function(Vue) {
  Vue.prototype.$fetch = axios
  Vue.prototype.$format = format
}
