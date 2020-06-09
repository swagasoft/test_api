const express = require('express');
const router = express.Router();
var UserController = require('./user-controller');


router.post('/create-user', UserController.createUser);
router.get('/get-all-users', UserController.getAllUsers);
router.get('/get-user:id',UserController.getUser);
router.put('/update-user', UserController.updateUser);
router.delete('/delete-user:id', UserController.deleteUser);
 


module.exports = router