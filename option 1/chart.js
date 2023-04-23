const gradientRTY = {
    linearGradient: { x1: 0, x2: 0.25, y1: 0.25, y2: 0.2 },
    stops: [
        [0, '#ff0000'],
        [0.65, '#ffff00'],
        [1, '#ffff00']
    ]
}

const gradientYTG = {
    linearGradient: { x1: 0, x2: 0.25, y1: 0.25, y2: 0.2 },
    stops: [
        [0, '#ffff00'],
        [0.25, '#ffff00'],
        [1, '#00ff00']
    ]
}

Highcharts.chart('container', {
    chart: {
        type: 'gauge'
    },
    pane: {
        startAngle: -90,
        endAngle: 90,
        background: {
            borderColor: 'transparent',
            backgroundColor: 'transparent'
        }
    },
    yAxis: {
        min: 0,
        max: 200,
        minorTickInterval: null,
        tickPixelInterval: 400,
        tickWidth: 0,
        plotBands: [{
            from: 0,
            to: 90,
            color: '#ff0000'
        }, {
            from: 90,
            to: 160,
            color: gradientRTY
        }, {
            from: 160,
            to: 200,
            color: gradientYTG
        }]
    },

    series: [{
        data: [120],
    }]

});
