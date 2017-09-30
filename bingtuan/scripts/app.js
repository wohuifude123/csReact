
var $ = require('jquery');
var jcanvas = require('../vender/jcanvas/jcanvas');

jcanvas($, window);

function processUUID() {
    var uuid = 'xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
    return uuid;
}

var box = $('#planet-box');
var boxHeight = box.height();
var boxWidth = box.width();

var devicePixelRatio = (window.devicePixelRatio || 1);

var canvas = $('<canvas></canvas>').css({
    width: boxWidth,
    height: boxHeight
}).attr({
    width: devicePixelRatio * boxWidth,
    height: devicePixelRatio * boxHeight
});
canvas.appendTo(box);

var spaceY = 36 * devicePixelRatio;
var spaceX = 60 * devicePixelRatio;
var offsetY = spaceY / 2;
var padding = 140;
boxHeight = boxHeight * devicePixelRatio - padding * 2;
boxWidth = boxWidth * devicePixelRatio - padding * 2;

var names = BTY_CONFIG.planet;
var links = {};

var animationFrames = {};

var earthImg = require('../images/app/earth.png');

for (var i = 0; i < names.length; i++) {
    // 运行轨迹
    canvas.drawEllipse({
        layer: true,
        strokeStyle: 'rgba(118, 237, 252, 1)',
        strokeWidth: 2,
        x: boxWidth / 2 + padding,
        y: boxHeight / 2 - offsetY * i + padding,
        height: boxHeight - spaceY * 2 * i,
        width: boxWidth - spaceX * 2 * i
    });

    var nameEarth = names[i].name + '_earth';
    var baseAngle = parseInt(Math.random() * 360);
    var params = {
        x: boxWidth / 2 + padding,
        y: boxHeight / 2 - offsetY * i + padding,
        rx: (boxWidth - spaceX * 2 * i) / 2,
        ry: (boxHeight - spaceY * 2 * i) / 2
    };
    var p = getPos(baseAngle, params);
    canvas.drawImage({
        layer: true,
        source: earthImg + '?v=' + i,
        name: nameEarth,
        x: p.x,
        y: p.y,
        scale: devicePixelRatio,
        click: function (layer) {
            window.location.href = links[layer.name];
        },
        mouseover: function (layer) {
            animationFrames[layer.name] = false;
        },
        mouseout: function (layer) {
            animationFrames[layer.name] = true;
        }
    });

    var textName = names[i].name + '_text';
    canvas.drawText({
        layer: true,
        name: textName,
        fillStyle: '#ffffff',
        x: p.x,
        y: p.y,
        fontSize: 14,
        text: names[i].name,
        scale: devicePixelRatio,
        click: function (layer) {
            window.location.href = links[layer.name];
        },
        mouseover: function (layer) {
            animationFrames[layer.name] = false;
        },
        mouseout: function (layer) {
            animationFrames[layer.name] = true;
        }
    });

    animationFrames[nameEarth] = true;
    animationFrames[textName] = true;
    links[nameEarth] = names[i].link;
    links[textName] = names[i].link;
    animate([nameEarth, textName], params, baseAngle);

}

function getPos(baseAngle, params) {
    return {
        x: params.x + params.rx * Math.cos(baseAngle * Math.PI / 180),
        y: params.y + params.ry * Math.sin(baseAngle * Math.PI / 180)
    };
}

function animate(name, params, baseAngle) {

    function start() {
        requestAnimationFrame(function () {
            if (animationFrames[name[0]] && animationFrames[name[1]]) {
                baseAngle += 1;
                var p = getPos(baseAngle, params);
                var scale = Math.max(0.5, p.y / params.y / 2 * devicePixelRatio);
                canvas.animateLayer(name[0], {
                    x: p.x,
                    y: p.y,
                    scale: scale
                }, 0);
                canvas.animateLayer(name[1], {
                    x: p.x,
                    y: p.y,
                    scale: scale
                }, 0);
            }
            start();
        });

    }

    start();
}

// 中心综合视图
var zhImg = require('../images/app/zh-earth.png');
canvas.drawImage({
    layer: true,
    source: zhImg,
    x: boxWidth / 2 + padding,
    y: boxHeight / 2 - 8 * offsetY + padding,
    scale: devicePixelRatio
});

