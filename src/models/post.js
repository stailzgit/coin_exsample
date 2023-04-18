const mongoose = require("mongoose");
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const Post = mongoose.model(
  "Post",

  new Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    user: { type: ObjectId, ref: "User" },
    comments: [{ type: ObjectId, ref: "Comment" }],
  })
);

module.exports = { Post };
