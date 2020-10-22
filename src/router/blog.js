exports.blogRouter = (req, res) => {
  const method = req.method
  const url = req.url
  const path = url.split("?")[0]

  /**
   * 获取列表
   */
  if (method === "GET" && path === "/api/blog/list") {
    return {
      msg: "blog router - list",
    }
  }

  /**
   * 获取博客详情
   */
  if (method === "GET" && path === "/api/blog/detail") {
    return {
      detial: "detail",
    }
  }

  /**
   * 新建一篇博客
   */
  if (method === "POST" && path === "/api/blog/new") {
    return {
      new: "new",
    }
  }
}
