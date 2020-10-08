const express = require ('express');

const router = express.Router(); 

router.get('/', (req, res) => {
    res.render('welcome');
});

// router.get('/', function(req, res) {
//     res.send('Welcome');
// }); 

module.exports = router;