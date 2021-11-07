const isAuth = (req, res, next) => {
  const date = new Date();
  const hour = date.getHours();
  const day = date.getDay();

  if (hour >= 1 && hour <= 5 && day >= 1 && day <= 5) {
    return next();
  }
  return res.status(401).send("<h2>Come Back tomorrow at 9h</h2>");
};
module.exports = isAuth;
