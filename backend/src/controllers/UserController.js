var jwt = require("jsonwebtoken");
const User = require("./../models/User");

module.exports = {
  async register(request, response) {
    const { name, email, password } = request.body;

    try {
      const user = await User.createUser(name, email, password);

      return response.json(user);
    } catch (err) {
      return {
        code: 500,
        message: "User not registered, try again.",
      };
    }
  },

  async signin(request, response) {
    const { email, password } = request.body;

    try {
      const user = await User.searchUser(email, password);

      if (user.code === 200) {
        const _id = user._id;

        const token = jwt.sign({ _id }, "@MSGINST#2020$$");

        user.token = token;
      }

      return response.json(user);
    } catch (err) {
      return {
        code: 500,
        message: "User not registered, try again.",
      };
    }
  },

  async oneSignalInformations(request, response) {
    const { _id, onesignal_token, onesignal_user_id } = request.body;

    try {
      const user = await User.setOneSignalInformations(
        _id,
        onesignal_token,
        onesignal_user_id
      );

      return response.json(user);
    } catch (err) {
      return {
        code: 500,
        message: "User not registered, try again.",
      };
    }
  },
};
