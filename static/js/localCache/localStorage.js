// 设置appCode
let appCode = 'APP-CODE-KEY'
export const localAppCode = {
	set(val) {
		localStorage.setItem(appCode, val)
	},
	get() {
		return localStorage.getItem(appCode)
	},
	remove() {
		localStorage.removeItem(appCode)
	}
}
