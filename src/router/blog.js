const { blogCtl } = require("../controller/blog")
const { SuccessModel, ErrorModel } = require("../model/reqRes")

exports.blogRouter = async (req, res) => {
  const id = req.query.id

  /**
   * 获取列表
   */
  if (req.method === "GET" && req.path === "/api/blog/list") {
    const listData = await blogCtl.getList(req.query.author || "", req.query.keyword || "")
    return new SuccessModel(listData)
  }

  /**
   * 获取博客详情
   */
  if (req.method === "GET" && req.path === "/api/blog/detail") {
    const detail = await blogCtl.getDeatail(req.query.id)
    return new SuccessModel(detail)
  }

  /**
   * 新建一篇博客
   */
  if (req.method === "POST" && req.path === "/api/blog/new") {
    req.body.author = "wanger"
    const result = await blogCtl.newBlog(req.body)
    return new SuccessModel(result)
  }

  /**
   * 更新内容
   */
  if (req.method === "POST" && req.path === "/api/blog/update") {
    const re = await blogCtl.updateBlog(id, req.body)
    if (re) {
      return new SuccessModel()
    } else {
      return new ErrorModel("update fail ... ")
    }
  }

  /**
   * 删除博客
   */
  if (req.method === "POST" && req.path === "/api/blog/del") {
    req.body.author = "wanger"
    const re = await blogCtl.delBlog(id, req.body.author)
    if (re) {
      return new SuccessModel()
    } else {
      return new ErrorModel("delete fail ... ")
    }
  }
}
