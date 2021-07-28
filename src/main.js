import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import routes from './router'


Vue.prototype.$http = Axios
Vue.config.productionTip = false

new Vue({
  router: routes,
  render: h => h(App)
}).$mount('#app')

Vue.filter('formatDate', function(str){
  if(!str) return ''
  let date = new Date(str)
  let time = new Date().getTime() - date.getTime() //现在的时间-传入的时间 = 相差的时间（单位 = 毫秒）
  if(time < 0){
    return ''
  } else if((time/1000) < 30){
    return '刚刚'
  } else if((time/1000) < 60){
    return parseInt(time/1000) + '秒前'
  } else if((time/60000) <60){
    return parseInt(time/60000) + '分钟前'
  } else if((time/3600000) < 24){
    return parseInt(time/3600000) + '小时前'
  } else if((time/86400000) < 31){
    return parseInt(time/86400000) + '天前'
  } else if((time/2592000000) < 12){
    return parseInt(time/2592000000) + '月前'
  } else {
    return parseInt(time/31536000000) + '年前'
  }
})

//处理显示板块的文字
Vue.filter('formatTab', function(post){
  if(post.good) return '精华'
  if(post.top) return '置顶'
  if(post.tab === 'ask') return '问答'
  if(post.tab === 'share') return '分享'
  return '招聘'
})