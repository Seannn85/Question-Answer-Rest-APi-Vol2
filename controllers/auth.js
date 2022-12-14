const customErrorHandler = require("../middlewares/errors/customErrorHandler");
const User = require("../models/User");
const CustomError = require("../helpers/error/CustomError");
const asyncErrorWrapper = require("express-async-handler");
const {sendJwtToClient} = require("../helpers/authorization/tokenHelpers");

const register = asyncErrorWrapper(async (req, res, next) => {



  const {name,email,password,role} = req.body;
  const user = await User.create({
    name: name,
    email: email,
    password: password,
    role:role,
  });

  sendJwtToClient(user,res);

});


const getUser = (req,res,next) => {
    res.json({
        success: true,
       data: {
        id: req.user.id,
        name: req.user.name
       }
    })
}

module.exports = {
  register,
  getUser
};
