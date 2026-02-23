const express = require('express'); 
const router = express.Router(); 
const createAccountController = require('../controllers/createAccountController');

router.post('/createAccount', createAccountController.handleCreateAccount);

module.exports = router;
