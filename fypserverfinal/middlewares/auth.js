const jwt = require("jsonwebtoken");
const User = require("../models/User/UserLogin");
const auth = async (req, res, next) => {
  try {
    const token = req.cookies.jwtoken;
    const verifyToken = jwt.verify(
      token,
      "thisisfarihakausarinuniversotyofeducation"
    );
    const rootUser = await User.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });
    if (!rootUser) {
      console.log("nor found");
    }
    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).send("hjk");
  }
};
module.exports = auth;
