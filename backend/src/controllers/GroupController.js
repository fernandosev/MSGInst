var jwt = require("jsonwebtoken");
var unirest = require("unirest");
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

  async sendMessage(request, response) {
    const { title, message, groupID, sender } = request.body;

    const usersFromGroup = await Group.selectUsersFromGroup(groupID, sender);

    const ids = [];

    usersFromGroup.groups.forEach((value, index) => {
      ids.push(value.user_onesignal_id);
    });

    if (ids.length > 0) {
      const sendNotification = await new Promise((resolve, reject) => {
        const req = unirest(
          "POST",
          "https://onesignal.com/api/v1/notifications"
        );

        req.headers({
          "content-type": "application/json",
          authorization: `Basic ${process.env.ONESIGNAL_TOKEN}`,
        });

        req.type("json");
        req.send({
          include_player_ids: ids,
          app_id: process.env.ONESIGNAL_APP_ID,
          contents: {
            en: message,
          },
          headings: {
            en: title,
          },
          data: {},
        });

        req.end(function (res) {
          if (res.error) reject(res.error);

          resolve(res.body);
        });
      });

      response.json(sendNotification);
    } else {
      response.json({});
    }
  },
};
