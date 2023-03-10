const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wishlistSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  product: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

module.exports = Wishlist = mongoose.model("Wishlist", wishlistSchema);
