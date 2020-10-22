const { serverIns } = require("./src/main")
const { PORT } = require("./conf/config")

var http = require("http")

const server = http.createServer(serverIns)

server.listen(PORT)
console.log(`Server Listening ${PORT} ...`)
