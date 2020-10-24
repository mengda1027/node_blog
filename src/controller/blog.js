const { exec } = require("../db/index")

exports.blogCtl = {
  getList: async (author, keyword) => {
    let sql = "select * from blogs where 1=1"
    if (author) {
      sql += ` and author = '${author}'`
    }
    if (keyword) {
      sql += ` and title like '%${keyword}%'`
    }
    sql += ` order by createtime desc;`
    return exec(sql)
  },
  updateBlog: (id, newContent) => {
    return { id, newContent }
  },
}
