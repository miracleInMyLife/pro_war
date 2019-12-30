# 多行文本显示省略号
      overflow: hidden;    
      display: -webkit-box;
      text-overflow:ellipsis;    
      -webkit-line-clamp:2;  // 限制在一个块元素显示的文本的行数
      -webkit-box-orient: vertical

# 报错Uncaught Error: [vue-router] route config "component" for path: /test cannot be a string id. Use an actual component

  原因：路由设置错误，原本想要设置重定向的路由，
      path：'',
      component:'imgs'   此处应该写redirect