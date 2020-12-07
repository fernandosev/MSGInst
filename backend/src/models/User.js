const connection = require("../services/dbConnection");
const crypt = require("../services/crypt");

module.exports = {
  async createUser(name, email, password) {
    try {
      const pool = await connection();

      const promisePool = pool.promise();

      const userHash = await crypt.crypt(password);

      const dbResponse = await promisePool.query(
        `insert into user (user_id, user_name, user_email, user_password) values (default, "${name}", "${email}", "${userHash}");`
      );

      return {
        code: 200,
        message: "User successfully registered.",
      };
    } catch (err) {
      return {
        code: 500,
        message: "User not registered, try again.",
      };
    }
  },

  async searchUser(email, password) {
    try {
      const pool = await connection();

      const promisePool = pool.promise();

      let [rows] = await promisePool.query(
        `SELECT user_password FROM user WHERE user_email = "${email}" limit 1`
      );

      let hashUser = null;

      if (rows[0].user_password) {
        hashUser = rows[0].user_password;
      } else {
        return {
          code: 404,
          message:
            "Usuário não encontrado. Verifique suas informações e tente novamente.",
        };
      }

      const login = await crypt.compare(password, hashUser);

      [rows] = await promisePool.query(
        `SELECT * FROM user WHERE user_email = "${email}" AND user_password = "${hashUser}"  limit 1`
      );

      const user = rows[0];

      if (login === true) {
        return {
          _id: user.user_id,
          name: user.user_name,
          email: user.user_email,
          code: 200,
          message: "Sucesso!",
        };
      } else {
        return {
          code: 500,
          message: "Erro ao encontrar usuário. Tente novamente",
        };
      }
    } catch (err) {
      return {
        code: 500,
        message: "Erro ao encontrar usuário. Tente novamente",
      };
    }
  },
};
