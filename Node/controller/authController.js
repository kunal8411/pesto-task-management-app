const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.signIn = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with this email already exists" });
    }
    console.log("TRMIED PASSWORD", password.trim());
    // Hash the password
    const hashedPassword = await bcrypt.hash(password.trim(), 10);
    // const hashedPassword1 = await bcrypt.hash(password.trim(), 10);
    // const hashedPassword2 = await bcrypt.hash(password.trim(), 10);
    // const hashedPassword3 = await bcrypt.hash(password.trim(), 10);
    // const hashedPassword4 = await bcrypt.hash(password.trim(), 10);
    // const hashedPassword5 = await bcrypt.hash(password.trim(), 10);
    // console.log({
    //   hashedPassword,
    //   hashedPassword1,
    //   hashedPassword2,
    //   hashedPassword3,
    //   hashedPassword4,
    //   hashedPassword5,
    // });
    // Create a new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
