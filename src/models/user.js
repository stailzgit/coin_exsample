const mongoose = require("mongoose");
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const userSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  coins: [
    {
      coin: { type: ObjectId, ref: "ERC20Coin" },
      count: { type: Number, default: 0 },
    },
  ],
});

const UserSchema = mongoose.model("userSchema", userSchema);
module.exports = { UserSchema };
