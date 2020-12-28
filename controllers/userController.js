class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  async getUser(req, res) {
    const query = await this.userService.getUser();
    res.send(query);
  }

  async getUserId(req, res) {
    const userId = req.params.id;
    const query = await this.userService.getUserId(userId);
    res.send(query);
  }

  async addUser(req, res) {
    const { body } = req;
    const query = await this.userService.addUser(body);
    res.send(query);
  }
}

module.exports = UserController;
