const express = require('express');
const request = require('request');
const router = express.Router();
const fetch = require('node-fetch');
const albums = {
    '2017-summer-montreal': '72157665232130448',
    '2017-summer-beauce': '72157692090128354',
    '2017-fall-montreal': '72157692090175044'
};

function buildFlickrPhotoApi(farm, server, id, secret) {
    let string = 'https://farm' + farm + '.staticflickr.com/' + server + '/' + id + '_' + secret + '_h.jpg';
    return string;
}

router.get('/:albums', function (req, res) {
    if (albums.hasOwnProperty(req.params.albums)) {
        let queryString = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getphotos&format=json&user_id=156166587@N08&photoset_id=' + albums[req.params.albums] + '&api_key=856b7c68ff0760ad430e10b48c31c7be&format=json&nojsoncallback=1';
        request(queryString, {json: true}, function (err, response, body) {
            if (err) {
                return console.log(err);
            }
            let photos = body.photoset.photo;
            let photoUrls = [];
            photos.forEach(function (photo, index) {
                photoUrls[index] = buildFlickrPhotoApi(photo.farm, photo.server, photo.id, photo.secret);
            });
            console.log(photoUrls);
            res.json(photoUrls);
        });
    }
    else {
        res.json({});
    }

})
;

module.exports = router;


