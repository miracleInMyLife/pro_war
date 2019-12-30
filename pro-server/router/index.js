const express = require('express')
const jwt = require('jsonwebtoken')

// 得到路由器对象
const router = express.Router()

// 登陆
router.post('/login', (req, res) => {
  const {username, password} = req.body
	if(username === '100k' && password === '123123'){
		//签发token 指定过期时间 7 天
		const token = jwt.sign({id: 1234567890}, '100k', { expiresIn: '7 days' });
		res.send({
			status: 1, 
			data: {
				user,
				token
			}
		})
	}else {
		res.send({
			status: 0, 
			errMsg: '账户名或密码错误，请重新登录'
		})
	}
})

// 搜索请求
router.post('/search', (req, res) => {
  const {keyword} = req.body
	
})

require('./money.js')(router)
require('./category.js')(router)
require('./buyList.js')(router)
require('./msite.js')(router)
require('./more.js')(router)
require('./profile.js')(router)

module.exports = router