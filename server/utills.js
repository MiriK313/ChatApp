module.exports.ParseMessage = (messages) => {
  var parseListMessage = [];
  messages.map((message) => {
    console.log(message.dataValues);
    parseListMessage.push({
      body: {
        message: message.content,
        currentUser: { nickname: message.nickname, avatar: message.avatar },
      },
      id: message.id,
    });
  });
  return parseListMessage;
};

/* 
  {
    body: {
      message: "hey 1",
      currentUser: { nickname: "mosh", avatar: "blue" },
    },

    id: "12928282",
  },


{
  content: 'hey 1',
  nickname: 'yosi',
  avatar: 'blue',
  id: '123456',
  index: 1,
  createdAt: 2021-04-17T17:54:56.000Z,
  updatedAt: 2021-04-17T17:54:56.000Z
}

*/
