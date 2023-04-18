module.exports = async (_, {}, { models }) => {
  return await models.Post.find({}).populate("comments");
};
