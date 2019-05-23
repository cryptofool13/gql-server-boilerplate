export default {
  Query: {
    users: (parent, args, { models }) => {
      return Object.values(models.users);
    },
    me: (parent, args, { me }) => {
      return me;
    },
    user: (parent, { id }, { models }) => {
      return models.users[id];
    }
  },
  User: {
    messages: (user, args, { models }) => {
      return Object.values(models.messages).filter(
        message => message.userId === user.id
      );
    }
  }
};
