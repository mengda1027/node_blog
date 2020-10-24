const env = process.env.NODE_ENV
const { db } = require("../../conf/config")

// 配置
let MYSQL_CONF
let REDIS_CONF

if (env === "dev") {
  MYSQL_CONF = db.dev

  // redis
  REDIS_CONF = {
    port: 6379,
    host: "127.0.0.1",
  }
}

if (env === "production") {
  MYSQL_CONF = db.prd

  // redis
  REDIS_CONF = {
    port: 6379,
    host: "127.0.0.1",
  }
}

module.exports = {
  MYSQL_CONF,
  REDIS_CONF,
}
