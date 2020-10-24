const { exec } = require("../db/index")

exports.blogCtl = {
  // 获取列表
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

  // 博客详情
  getDeatail: async (id) => {
    const sql = `select * from blogs where id='${id}'`
    const rows = await exec(sql)
    return rows[0]
  },

  // 新建
  newBlog: async (blogData = {}) => {
    // blogData 包含title content author
    const title = blogData.title
    const content = blogData.content
    const author = blogData.author
    const createTime = Date.now()

    const sql = `
        insert into blogs (title, content, createtime, author)
        values ('${title}', '${content}', ${createTime}, '${author}');
    `
    const insertData = await exec(sql)
    return {
      id: insertData.insertId,
    }
  },
  // 更新博客
  updateBlog: async (id, blogData = {}) => {
    const title = blogData.title
    const content = blogData.content

    const sql = `
        update blogs set title='${title}', content='${content}' where id=${id}
    `

    const updateData = await exec(sql)
    if (updateData.affectedRows > 0) {
      return true
    }
    return false
  },

  // 删除
  delBlog: async (id, author) => {
    // id 就是要删除博客的id
    const sql = `delete from blogs where id='${id}' and author='${author}';`
    const delData = await exec(sql)
    if (delData.affectedRows > 0) {
      return true
    }
    return false
  },
}
