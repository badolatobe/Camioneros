//const { application } = require('express');

const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
   //console.log(path.dirname('../views/index.html'));
   res.sendFile(path.resolve(''))
})
module.exports = router;