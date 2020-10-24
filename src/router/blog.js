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
    return {
      detial: "detail",
    }
  }

  /**
   * 新建一篇博客
   */
  if (req.method === "POST" && req.path === "/api/blog/new") {
    return {
      new: req.body,
    }
  }

  /**
   * 更新内容
   */
  if (req.method === "POST" && req.path === "/api/blog/update") {
    const re = blogCtl.updateBlog(id, req.body)
    if (re) {
      return new SuccessModel(re)
    } else {
      return new ErrorModel("update fail ... ")
    }
  }
}
