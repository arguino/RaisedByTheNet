var cheerio = require("cheerio");
var express = require('express');
var request = require('request');
var router = express.Router();

router.get('/', function (req, res, next) {
    request('https://news.ycombinator.com', function (error, response, html) {
        if (!error && response.statusCode == 200) {
            console.log(html);
        }
    });
    res.render('index', {title: 'Express'});
});

module.exports = router;
