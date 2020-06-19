const User = require('../models/user');

exports.signup = async (req, res, next) => {
  try {
    const { name, email, passwors } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        error: 'Email is taken',
      });
    }

    let newUser = await User.create(req.body);
    console.log(newUser);
    res.status(201).json({
      message: 'Success',
      user: newUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: error,
    });
  }
};
