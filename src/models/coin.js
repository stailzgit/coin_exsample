const mongoose = require("mongoose");
const { Schema } = mongoose;

const erc20CoinSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
});

const ERC20Coin = mongoose.model("ERC20Coin", erc20CoinSchema);
module.exports = { ERC20Coin };
