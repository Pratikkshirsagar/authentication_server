exports.signup = (req, res, next) => {
  console.log('req body', req.body);
  res.json({
    data: 'you hit  the signup',
  });
};
