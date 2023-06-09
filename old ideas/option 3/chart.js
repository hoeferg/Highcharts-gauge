Highcharts.chart('container', {

    chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false,
        height: '90%'
    },

    title: {
        text: 'Your score'
    },

    pane: {
        startAngle: -90,
        endAngle: 90,
        background: null,
        center: ['50%', '75%'],
        size: '110%'
    },

    // the value axis
    yAxis: {
        min: 0,
        max: 200,
        tickPixelInterval: 72,
        tickPosition: 'null',
        minorTickInterval: 'inside',
        labels: {
            distance: 20,
            style: {
                fontSize: '14px'
            }
        },
        plotBands: [
      /*   {
            from: 0,
            to: 120,
            color: '#55BF3B', // green
            thickness: 20
        }, {
            from: 120,
            to: 160,
            color: '#DDDF0D', // yellow
            thickness: 20
        }, {
            from: 160,
            to: 200,
            color: '#DF5353', // red
            thickness: 20
        } */
          {
            from: 0,
            to: 120,
            color: '#DF5353', // green
            thickness: 20
        }, {
            from: 120,
            to: 160,
            color: '#DDDF0D', // yellow
            thickness: 20
        }, {
            from: 160,
            to: 200,
            color: '#55BF3B', // red
            thickness: 20
        }
        ]
    },

    series: [{
        name: 'Speed',
        data: [80],
        tooltip: {
            valueSuffix: ' '
        },
        dataLabels: {
            format: '{y} ',
            borderWidth: 0,
            color: (
                Highcharts.defaultOptions.title &&
                Highcharts.defaultOptions.title.style &&
                Highcharts.defaultOptions.title.style.color
            ) || '#333333',
            style: {
                fontSize: '16px'
            }
        },
        dial: {
            radius: '80%',
            backgroundColor: 'gray',
            baseWidth: 12,
            baseLength: '0%',
            rearLength: '0%'
        },
        pivot: {
            backgroundColor: 'gray',
            radius: 6
        }

    }]

});

// Add some life
setInterval(() => {
    const chart = Highcharts.charts[0];
    if (chart && !chart.renderer.forExport) {
        const point = chart.series[0].points[0],
            inc = Math.round((Math.random() - 0.5) * 20);

        let newVal = point.y + inc;
        if (newVal < 0 || newVal > 200) {
            newVal = point.y - inc;
        }
        point.update(newVal);
    }
}, 3000);