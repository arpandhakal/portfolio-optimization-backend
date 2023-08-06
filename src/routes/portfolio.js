const express = require("express");
const router = express.Router();
const {
  populateSavedPortfolios,
  fetchAllSavedPortfolios,
} = require("../controllers/portfolio");
router.post("/save", populateSavedPortfolios);
router.get("/savedPortfolios", fetchAllSavedPortfolios);
module.exports = router;
