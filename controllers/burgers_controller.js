var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function(req, res) {
    //create object that hold info from both burger and menu

    var info = {
        brgr: [],
        itm: []
    };

    //grabs data from burger table
    burger.selectAll(function(data) {
        for(var i=0; i<data.length; i++) {
            info.brgr.push(data[i]);
        }

        //grans data from menu table
        burger.getMenu(function(data) {
            for(var i=0; i<data.length; i++) {
                info.itm.push(data[i]);
            }
        //sends it to index.handlebars
        res.render('index', info);
        });
    });
});

router.get('/menu'), function(req, res) {
    burger.getMenu(function(data) {
        res.render('menu', { itm: data });
    });
};

router.post('/create', function(req, res) {
    burger.insertOne([req.body.burgerInput], function(){
        res.redirect('/');
    });
});

router.put('/update/:id', function(req, res) {
    burger.updateOne([req.body.devoured], [req.params.id], function() {
        res.redirect('/');
    });
});

router.delete('/delete/:id', function (req, res) {
    burger.deleteOne([req.params.id], function() {
        res.redirect('/');
    });
    
});

module.exports = router;