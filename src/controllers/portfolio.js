const User = require("../models/User");
const SavedPortfolio = require("../models/SavedPorfolios");

// Controller function to populate the savedPortfolios field
exports.populateSavedPortfolios = async (req, res) => {
  try {
    const { initialPortfolio, finalPortfolio, userId } = req.body;
    // const userId = req.headers.authorization; // Get the userId from the req.user object

    // Create a new saved portfolio
    const savedPortfolio = new SavedPortfolio({
      user: userId,
      initialPortfolio,
      finalPortfolio,
    });

    // Save the saved portfolio to the database
    await savedPortfolio.save();

    res.status(201).json({ message: "Saved portfolio created successfully." });
  } catch (error) {
    console.error("Error populating saved portfolios:", error);
    res.status(500).json({
      message: "An error occurred while populating saved portfolios.",
    });
  }
};

exports.fetchAllSavedPortfolios = async (req, res) => {
  try {
    const userId = req.query.userId; // Get the user ID from the query parameters

    // Find all saved portfolios for the user
    const savedPortfolios = await SavedPortfolio.find({ user: userId });

    res.status(200).json(savedPortfolios);
  } catch (error) {
    console.error("Error fetching saved portfolios:", error);
    res.status(500).json({
      message: "An error occurred while fetching saved portfolios.",
    });
  }
};
