const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;

const { User, Post, Comment } = require("../../models");

module.exports = async (_, { input }, { models }) => {
  const newComment = new Comment(input);
  const createdComment = await newComment.save();

  const user = await User.findById(ObjectId(input.user));
  const post = await Post.findById(ObjectId(input.post));

  user.comments.push(createdComment.id);
  post.comments.push(createdComment.id);

  await user.save();
  await post.save();

  return createdComment;
};
