const ErrorHander = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
const sendToken = require("../utils/jwtToken");

//Register a User

exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await User.create({name,email,password,avatar: { public_id: "this is a sample id", url: "profilepicurl" }});
  sendToken(user, 201, res);
});

//Login User

exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  //Checking if user has entered both email and password
  if (!email || !password) {return next(new ErrorHander("Please Enter Email & Password", 400));}
  const user = await User.findOne({ email: email }).select("+password");
  if (!user) {return next(new ErrorHander("Invalid Email & Password", 401));
  }
  const isPasswordMatched = user.comparePassword(password);
  if (!isPasswordMatched) {return next(new ErrorHander("Invalid Email & Password", 401));
  }
  sendToken(user, 200, res);
});

// Logout

exports.logoutUser = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {expires: new Date(Date.now()), httpOnly: true});
  res.status(200).json({success: true,message: "User Logged Out",});
});
