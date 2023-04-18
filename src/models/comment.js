const mongoose = require("mongoose");
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const Comment = mongoose.model(
  "Comment",

  new Schema({
    text: { type: String, required: true },
    post: { type: ObjectId, ref: "Post" },
    user: { type: ObjectId, ref: "User" },
  })
);

module.exports = { Comment };
