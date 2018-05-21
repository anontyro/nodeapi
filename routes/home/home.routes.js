/**
 * Main Home Router
 */

 const express = require('express');
 const router = express.Router();
 const mongoose = require('mongoose');

 router.get('*', (req, res, next) => {
    // res.locals.user = req.session.user || null;
    console.log(res.locals.user);
    next();
 });

router.get('/', (req, res) =>{
    res.json({response: 'home request'});
});


module.exports = router;