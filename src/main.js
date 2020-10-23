const { userRouter, blogRouter } = require("./router/index")
const querystring = require("querystring")

exports.serverIns = async (req, res) => {
  // 设置返回格式
  res.setHeader("Content-type", "application/json")

  req.path = req.url.split("?")[0]
  req.query = querystring.parse(req.url.split("?")[1])

  // post data
  const postData = await getPostData(req)
  req.body = postData

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

/**
 * 处理Post请求数据
 * @param {request} req
 */
const getPostData = (req) => {
  return new Promise((resolve, reject) => {
    if (req.method !== "POST") {
      resolve({})
      return
    }
    if (req.headers["content-type"] !== "application/json") {
      resolve({})
      return
    }
    let postData = ""
    req.on("data", (chunk) => {
      postData += chunk.toString()
    })
    req.on("end", () => {
      if (!postData) {
        resolve({})
        return
      }
      resolve(JSON.parse(postData))
    })
  })
}
