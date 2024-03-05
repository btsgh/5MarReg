export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]
		// return moment().format("LLLL")
		//return _.chunk([1,2,3,4,5,6,7,8,9], 3)
		setInterval(() => {showAlert("Hi", "success")}, 2000, "Int3")
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
		clearInterval("Int3")
	}
}