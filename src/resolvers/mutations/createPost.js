const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;
const { Post } = require("../../models");

module.exports = async (_, { input }, { models }) => {
  console.log(input);
  const newPost = new Post(input);
  const createdPost = await newPost.save();
  const user = await models.User.findById(ObjectId(input.user));
  user.posts.push(createdPost.id);
  await user.save();

  return createdPost;
};
