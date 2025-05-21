const express = require('express');
const router = express.Router();
const userController = require('../Controller/userController');

// Define Routes
router.get('/get-users', userController.getAllUsers);
router.post('/add-user', userController.addUser);
router.put('/update-user/:id', userController.updateUser);
router.delete('/delete-user/:id', userController.deleteUser);

module.exports = router;
