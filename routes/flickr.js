const express = require('express');
const request = require('request');
const router = express.Router();
const fetch = require('node-fetch');


function buildFlickrPhotoApi(farm, server, id, secret) {
    let string = 'https://farm' + farm + '.staticflickr.com/' + server + '/' + id + '_' + secret + '_h.jpg';
    return string;
}

router.get('/', function (req, res) {
    request('https://api.flickr.com/services/rest/?method=flickr.photosets.getphotos&format=json&user_id=156166587@N08&photoset_id=72157665232130448&api_key=856b7c68ff0760ad430e10b48c31c7be&format=json&nojsoncallback=1', {json: true}, function (err, response, body) {
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
})
;

module.exports = router;


