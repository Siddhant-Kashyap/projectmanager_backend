const express= require('express')
const router = express.Router();
//import controller
const userController = require('../controllers/user.controller')

const validateUser = require('../middlewares/Validator/userValidator')

router.post('/register', validateUser, userController.createUser);
router.post('/login',userController.loginUser)


module.exports = router;