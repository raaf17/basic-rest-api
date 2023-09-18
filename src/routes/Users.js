const express = require('express');
const UserController = require('../controller/users')
const router = express.Router();

router.post('/', UserController.createNewUser);
router.get('/', UserController.getAllUsers);
router.patch('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

module.exports = router;