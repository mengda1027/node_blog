const { userRouter, blogRouter } = require("./router/index")

exports.serverIns = (req, res) => {
  // 设置返回格式
  res.setHeader("Content-type", "application/json")

  // 路由处理
  const blogResult = blogRouter(req, res)
  if (blogResult) {
    res.end(JSON.stringify(blogResult))
    return
  }

  const userResult = userRouter(req, res)
  if (userResult) {
    res.end(JSON.stringify(userResult))
    return
  }

  // 未命中路由，返回 404
  res.writeHead(404, { "Content-type": "text/plain" })
  res.write("404 Not Found\n")
  res.end()
}
