exports.userRouter = (req, res) => {
  /**
   * 登录
   */
  if (req.method === "POST" && req.path === "/api/user/login") {
    return { login: "login" }
  }
}
