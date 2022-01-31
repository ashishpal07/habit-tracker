
const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users_controller');

router.get('/login', usersController.login);
router.get('/register', usersController.register);

router.post('/create-user', usersController.createUser);

module.exports = router;