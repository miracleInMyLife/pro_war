

module.exports = function (router) {
  
  // 请求分类商品列表
	let category = require('./datas/category/category.json')
	router.get('/category', (req, res) => {
		// const {categoryName} = req.body
		res.send({
			status:1,
			datas:category
		})
	})


 return router

}