const express = require("express");
const User = require("../model/userModel");
const app = express();

// Get All USer
exports.getUser = async (req, res) => {
  const user = await User.find();
  res.status(200).json(user);
};

// Add USer
exports.addUser = async (req, res) => {
  const { name, email, role } = req.body;

  try {
    const user = new User({ name, email, role });
    user.save();
    res.status(200).json({
      message: "Data Added Successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

// Update USer
exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, role } = req.body;

  try {
    await User.findByIdAndUpdate(id, { name, email, role });
    res.status(200).json({
      message: "Updated Successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

// Delete USer
exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    await User.findByIdAndDelete(id);
    res.status(200).json({
      message: "User Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
  }
};
