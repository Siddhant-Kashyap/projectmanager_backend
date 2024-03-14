const userServices = require('../services/user.services')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

async function createUser(req,res,next){
        try {
            const hashedPassword = await bcrypt.hash(req.body.password, 10); 
            const user = await userServices.createUser({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: hashedPassword 
            });
    
            res.status(201).json(user);

        } catch (error) {
            next(error);
        }
}
async function getUser(req, res, next) {
    try {
      const userId = req.params.userId;
      const user = await userService.getUserById(userId);
      if (!user) {
        res.status(404).json({ error: 'User not found' });
      } else {
        res.status(200).json(user);
      }
    } catch (error) {
      next(error);
    }
  }
  async function loginUser(req,res,next){
    try {
      const {email,password}= req.body;
      const user = await userServices.authenticateUser(email,password);

      const token = jwt.sign({userId:user.userId},'developer_testing',{expiresIn:'12h'});
      res.status(200).json({token});
    } catch (error) {
      next(error)
    }
  }
  

  module.exports = {
    createUser,
    getUser,loginUser
  };