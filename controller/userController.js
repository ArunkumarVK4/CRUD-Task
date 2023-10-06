const express = require("express");
const User = require("../model/userModel");
const app = express();

exports.getUser = async (req, res) => {
  const user = await User.find();
  res.status(200).json(user);
};

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

exports.updateUser = async (req, res) => {
  const { name, email, role } = req.body;


  try {
    const newUser = new User({ name, email, role });
    newUser.save()
    res.status(200).json({
        message:"Updated Successfully"
    })
  } catch (error) {
    console.log(error);
  }
};

exports.deleteUser = async (req, res) => {
  const { name, email, role } = req.body;
  const user = await User.findOne({ email });
  try {
    await User.findByIdAndDelete(user);
    res.status(200).json({
      message: "User Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
  }
};
