const express = require ('express');

const router = express.Router(); 

// Login Page
router.get('/login', (req, res) => {
    res.send('Login');
}); 

// Register Page
router.get('/register', (req, res) => {
    res.send('register');
});

// router.get('/', function(req, res) {
//     res.send('Welcome');
// }); abhay madarchod

module.exports = router;