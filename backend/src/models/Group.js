const connection = require("../services/dbConnection");
const crypt = require("../services/crypt");

module.exports = {
  async createGroup(name, userID) {
    try {
      const pool = await connection();

      const promisePool = pool.promise();

      const dbResponse = await promisePool.query(
        'insert into `group` (group_id, group_name) values (default, "' +
          name +
          '");'
      );

      const newGrupuID = dbResponse[0].insertId;

      console.log(newGrupuID, userID);

      return await this.addUserToGroup(newGrupuID, userID);
    } catch (err) {
      return {
        code: 500,
        message: "Grupo não cadastrado. Tente novamente.",
      };
    }
  },

  async addUserToGroup(groupID, userID) {
    try {
      const pool = await connection();

      const promisePool = pool.promise();

      const dbResponse = await promisePool.query(
        `insert into user_group (user_group_id, user_id, group_id) values (default, ${userID}, ${groupID});`
      );

      return {
        code: 200,
        message: "Usuário adicionado com sucesso ao grupo.",
      };
    } catch (err) {
      return {
        code: 500,
        message: "Erro. Tente novamente.",
      };
    }
  },

  async selectMyGroups(id) {
    try {
      const pool = await connection();

      const promisePool = pool.promise();

      const dbResponse = await promisePool.query(
        "select `group`.`group_id`, `group`.`group_name`, `user`.`user_id` from `group`, `user_group`, `user` where `group`.`group_id` = `user_group`.`group_id` and `user`.`user_id` = `user_group`.`user_id` and `user`.`user_id` = " +
          id +
          ";"
      );

      return {
        code: 200,
        message: "Sucesso!",
        groups: dbResponse[0],
      };
    } catch (err) {
      return {
        code: 500,
        message: "Erro. Tente novamente.",
      };
    }
  },

  async selectAnotherGroups(id) {
    try {
      const pool = await connection();

      const promisePool = pool.promise();

      const dbResponse = await promisePool.query(
        "select `group`.`group_name`, `group`.`group_id` from `group` inner join `user_group` on `group`.`group_id` = `user_group`.`group_id` and `group`.`group_id` = `user_group`.`group_id` where `user_group`.`user_id` != " +
          id +
          ";"
      );

      return {
        code: 200,
        message: "Sucesso!",
        groups: dbResponse[0],
      };
    } catch (err) {
      return {
        code: 500,
        message: "Erro. Tente novamente.",
      };
    }
  },
};
