import uuidv4 from "uuid/v4";

export default {
  Query: {
    messages: async (parent, args, { models }) => {
      return await models.Message.findAll(); // Object.values(models.messages);
    },
    message: async (parent, { id }, { models }) => {
      return await models.Message.findByPk(id); // models.messages[id];
    }
  },
  Mutation: {
    createMessage: async (parent, { text }, { me, models }) => {
      try {
        return await models.Message.create({
          text,
          userId: me.id
        });
      } catch (error) {
        throw new Error(error);
      }
      // const id = uuidv4();
      // const message = {
      //   id,
      //   text,
      //   userId: me.id
      // };

      // models.messages[id] = message;
      // models.users[me.id].messageIds.push(id);
      // return message;
    },
    deleteMessage: async (parent, { id }, { models }) => {
      return await models.Message.destroy({ where: { id } });
    }
    // const { [id]: message, ...otherMessages } = models.messages;

    // if (!models.messages) {
    //   return false;
    // }
    // models.messages = otherMessages;

    // return true;
  },

  Message: {
    user: async (message, args, { models }) => {
      return await models.User.findByPk(message.userId); // models.users[message.userId];
    }
  }
};
