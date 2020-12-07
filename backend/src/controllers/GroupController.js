var jwt = require("jsonwebtoken");
const Group = require("./../models/Group");

module.exports = {
  async create(request, response) {
    const { name, userID } = request.body;

    try {
      const group = await Group.createGroup(name, userID);

      return response.json(group);
    } catch (err) {
      return {
        code: 500,
        message: "Grupo não cadastrado. Tente novamente.",
      };
    }
  },

  async join(request, response) {
    const { id, userID } = request.body;

    try {
      const group = await Group.addUserToGroup(id, userID);

      return response.json(group);
    } catch (err) {
      return {
        code: 500,
        message: "Grupo não adicionado. Tente novamente.",
      };
    }
  },

  async getMyGroups(request, response) {
    const { id } = request.body;
    try {
      const groups = await Group.selectMyGroups(id);

      return response.json(groups);
    } catch (err) {
      return {
        code: 500,
        message: "Erro ao buscar grupos. Tente novamente.",
      };
    }
  },

  async getAnotherGroups(request, response) {
    const { id } = request.body;
    try {
      const groups = await Group.selectAnotherGroups(id);

      return response.json(groups);
    } catch (err) {
      return {
        code: 500,
        message: "Erro ao buscar grupos. Tente novamente.",
      };
    }
  },
};
