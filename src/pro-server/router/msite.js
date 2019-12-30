

module.exports = function (router) {
  
  // 请求首页的猜你喜欢商品列表
	let homegoods = require('./datas/msite/goods.json')
	router.get('/msite/homegoods', (req, res) => {
		
		res.send({
			status:1,
			datas:homegoods
		})
	})


	
 return router

}