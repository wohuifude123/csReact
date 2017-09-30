
var $ = require('jquery');

require('script-loader!../vender/modernizr/modernizr');
require('../vender/waitForImages/jquery.waitforimages');
require('../vender/carousel-3d/jquery.carousel-3d');

var interval = null;
function start() {
    interval = setInterval(function () {
        $('#carousel').Carousel3d('next');
    }, 3000);
}
start();
$('#carousel').on('click', '[data-prev-button],[data-next-button]', function () {
    clearInterval(interval);
    start();
});