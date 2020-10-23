exports.blogCtl = {
  getList: (author, keyword) => {
    return [
      { author: author, text: "1" },
      { author: "1", text: keyword },
    ]
  },
  updateBlog: (id, newContent) => {
    return { id, newContent }
  },
}
