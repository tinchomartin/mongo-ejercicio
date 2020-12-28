const User = require("./../models/userModel");

class UserService {
  getUser() {
    const query = User.find().exec();
    return query;
  }

  getUserId(data) {
    const query = User.findById(data);
    return query;
  }

  addUser(user) {
    const newUser = new User(user);
    return newUser.save();
  }
}

module.exports = UserService;
