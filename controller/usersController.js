console.log('user controller is working!')

const User = require('../model/userModel.js');
const bcrypt = require('bcryptjs');

const usersController = {};

usersController.index = (req, res) => {
  res.json({
    message: user_id,
    user: req.user,
  });
};


usersController.create = (req, res, next) => {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);
  User.create({
    username: req.body.username,
    password_digest: hash,
    email: req.body.email,
  }).then(user => {
    req.login(user, (err) => {
      if (err) return next(err);
      res.redirect('/user');
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({error: err});
  });
}

module.exports = usersController;
