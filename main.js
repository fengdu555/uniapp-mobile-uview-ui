import App from './App'
import store from './store/index.js'
import uView from "uview-ui";
import ajaxConfig from 'static/js/ajax/requestConfig/index.js'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false

Vue.use(uView)
App.mpType = 'app'
const app = new Vue({
	store,
	...App
})

// 引入请求封装，将app参数传递到配置中
ajaxConfig()

app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	app.use(uView)

	// 引入请求封装，将app参数传递到配置中
	ajaxConfig()

	return {
		app
	}
}
// #endif
