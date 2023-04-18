const mongoose = require("mongoose");
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const User = mongoose.model(
  "User",

  new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    posts: [{ type: ObjectId, ref: "Post" }],
    comments: [{ type: ObjectId, ref: "Comment" }],
  })
);

module.exports = { User };
