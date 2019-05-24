export default {
  Query: {
    users: async (parent, args, { models }) => {
      return await models.User.findAll(); // Object.values(models.users);
    },
    me: async (parent, args, { models, me }) => {
      if (!me) return null;

      return await models.User.findByPk(me.id); // me;
    },
    user: async (parent, { id }, { models }) => {
      return await models.User.findByPk(id); // models.users[id];
    }
  },
  User: {
    messages: async (user, args, { models }) => {
      return await models.Message.findAll({
        where: {
          userId: user.id
        }
      }); // Object.values(models.messages).filter(message => message.userId === user.id);
    }
  }
};
