/*
https://github.com/500px/api-documentation/blob/master/endpoints/photo/GET_photos_id.md
https://github.com/500px/api-documentation/blob/master/endpoints/galleries/GET_galleries_id_items.md
https://github.com/500px/500px-js-sdk
 */
// var imgs = ['https://drscdn.500px.org/photo/231554327/m%3D900/v2?user_id=21987859&webp=true&sig=b79f74d71136d0062a5982e0ff7c060ea944cb3acfd87d5a3b2830ff1238633d', 'https://drscdn.500px.org/photo/231554351/m%3D900/v2?user_id=21987859&webp=true&sig=fc8116f5c63191630cf38dff7e135a61f83bacd71f77ff5a9268f5455afca2ae']
var container = document.getElementById('imageContainer');
var docFrag = document.createDocumentFragment();

imgs.forEach(function (url, index, originalArray) {
    var img = document.createElement('img');
    img.src = url;
    docFrag.appendChild(img);
});
container.appendChild(docFrag);

