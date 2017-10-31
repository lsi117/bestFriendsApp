const bcrypt = require('bcryptjs');

function comparePass(userPassword, dbPassword) {
  return bcrypt.compareSync(userPassword, dbPassword);
}

function loginRedirect(req, res, next) {
  if (req.user) return res.redirect('/bfAllView'); //had user before
  return next();
}

function loginRequired(req, res, next) {
  if (!req.user) return res.redirect('/auth/login');
  return next();
}

module.exports = {
  comparePass: comparePass,
  loginRedirect: loginRedirect,
  loginRequired: loginRequired,
}
