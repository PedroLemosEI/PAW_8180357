const UserModel = require("../models/user.model");
const bcrypt = require("bcryptjs");

let usersController = {};

// Get user profile
usersController.getProfile = (req, res) => {
  const userId = req.userId;

  UserModel.findById(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.status(200).json(user);
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal server error" });
    });
};

// Update user profile
usersController.updateProfile = (req, res) => {
  const userId = req.userId;
  const { username, email } = req.body;

  UserModel.findByIdAndUpdate(userId, { username, email }, { new: true })
    .then((updatedUser) => {
      if (!updatedUser) {
        return res.status(404).json({ error: "User not found" });
      }
      res.status(200).json(updatedUser);
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal server error" });
    });
};

// Update user password
usersController.updatePassword = (req, res) => {
  const userId = req.userId;
  const { password } = req.body;

  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      return res.status(500).json({ error: "Internal server error" });
    }

    UserModel.findByIdAndUpdate(
      userId,
      { password: hashedPassword },
      { new: true }
    )
      .then((updatedUser) => {
        if (!updatedUser) {
          return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json(updatedUser);
      })
      .catch((error) => {
        res.status(500).json({ error: "Internal server error" });
      });
  });
};


// Delete user account
usersController.deleteAccount = (req, res) => {
  const userId = req.userId;

  UserModel.findByIdAndDelete(userId)
    .then((deletedUser) => {
      if (!deletedUser) {
        return res.status(404).json({ error: "User not found" });
      }
      res.status(200).json({ message: "Account deleted successfully" });
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal server error" });
    });
};

module.exports = usersController;