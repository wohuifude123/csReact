/**
 *  Author: harry.lang
 *  Date: 2017/9/29
 *  Description: Created by harrylang on 2017/9/29.
 */
var echarts = require('echarts');
var scatterMark = require('../images/data/circle.png');

function getPos(center, r, angle) {
    var p = {
        x: center[0] + r * Math.cos(angle * Math.PI / 180),
        y: center[1] + r * Math.sin(angle * Math.PI / 180)
    };
    return [p.x, p.y];
}

var start = [52.5, 92.5];
var center = [52.5, 36];
var points = [{
    name: '兵团大数据平台',
    value: start,
    symbolSize: 1,
    label: {
        normal: {position: 'top', offset: [0, -20]}
    }
}];
var lines = [];
for (var i = 0; i < BTY_CONFIG.collection.length; i++) {
    var baseR = 46;
    var r = parseInt(Math.random() * baseR);
    var angle = parseInt(Math.random() * 360);
    var p = getPos(center, r, angle);

    var curveness = Math.abs(p[0] - start[0]) / 50 * 0.8;

    lines.push({
        name: BTY_CONFIG.collection[i],
        coords: [start, p],
        lineStyle: {
            normal: {
                curveness: p[0] < start[0] ? -curveness : curveness
            }
        }
    });
    points.push({
        name: BTY_CONFIG.collection[i],
        value: p
    });
}

var option = {
    grid: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    xAxis: {
        type: 'value',
        axisLine: {show: false},
        splitLine: {show: false}
    },
    yAxis: {
        type: 'value',
        axisLine: {show: false},
        splitLine: {show: false}
    },
    series: [{
        type: 'scatter',
        symbolSize: 0,
        data: [[100, 100]]
    }, {
        type: 'lines',
        coordinateSystem: 'cartesian2d',
        data: lines,
        effect: {
            show: true,
            period: 6,
            trailLength: 0.4,
            color: '#0dd0d9',
            symbolSize: 6
        },
        lineStyle: {
            normal: {
                color: '#0dd0d9',
                type: 'dotted',
                //curveness: 0.3
            }
        }
    }, {
        type: 'scatter',
        symbol: 'image://' + scatterMark,
        symbolSize: 18,
        data: points,
        label: {
            normal: {
                color: '#fff',
                show: true,
                position: 'bottom',
                formatter: function (params) {
                    return params.name;
                }
            }
        }
    }]
};

var chart = echarts.init($('#lines')[0]);
chart.setOption(option);