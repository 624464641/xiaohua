import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 引入ant的所有组件
import './uilib/index'
// 引入ant的样式  需要修改为less
import 'ant-design-vue/dist/antd.css';

new Vue({
  render: h => h(App),
}).$mount('#app')
