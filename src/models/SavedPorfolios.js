const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the savedPortfolios schema
let savedPortfolioSchema = new Schema(
  {
    user: {
      type: String,
      ref: "User",
      required: true,
    },
    initialPortfolio: [
      {
        symbol: String,
        amount: Number,
      },
    ],
    finalPortfolio: [
      {
        symbol: String,
        amount: Number,
      },
    ],
  },
  {
    timestamps: true,
    collection: "savedPortfolios",
  }
);

module.exports = mongoose.model("SavedPortfolio", savedPortfolioSchema);
