module.exports = async (_, {}, { models }) => {
  return await models.Comment.find({});
};
