var gaugeOptions = {

    chart: {
      type: 'solidgauge'
    },
  
    title: "Your Score",
  
    pane: {
      center: ['50%', '85%'],
      size: '140%',
      startAngle: -90,
      endAngle: 90,
      background: {
        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
        innerRadius: '60%',
        outerRadius: '100%',
        shape: 'arc'
      }
    },
  
    tooltip: {
      enabled: false
    },
  
    // the value axis
    yAxis: {
      stops: [
        [0.1, '#55BF3B'], // green
        [0.5, '#DDDF0D'], // yellow
        [0.9, '#DF5353'] // red
      ],
      lineWidth: 1,
      minorTickInterval: null,
      tickAmount: 10,
      title: {
        y: -70
      },
      labels: {
        y: 16
      }
    },
  
    plotOptions: {
      solidgauge: {
        dataLabels: {
          y: 5,
          borderWidth: 0,
          useHTML: true
        }
      }
    }
  };
  
  // The speed gauge
  var chartSpeed = Highcharts.chart('container-speed', Highcharts.merge(gaugeOptions, {
    yAxis: {
      min: 0,
      max: 200,
      title: {
        text: 'Your Score'
      }
    },
  
    credits: {
      enabled: false
    },
  
    series: [{
      name: 'Speed',
      data: [80],
      dial: {
        radius: '100%',
        baseWidth: 1,
        rearLength: '20%'
      },
      dataLabels: {
        format: '<div style="text-align:center"><span style="font-size:25px;color:' +
          ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
          '<span style="font-size:12px;color:silver">km/h</span></div>'
      },
      tooltip: {
        valueSuffix: ' km/h'
      }
    }, 
    // dial series (gauge)
    {
        data: [80],
      type: 'gauge',
      dial: {
          baseLength: "100%",
        radius: "110%",
        rearLength: "-45%"
      }
    }]
  
  }));
  
  // Bring life to the dials
  setInterval(function() {
    // Speed
    var point,
      newVal,
      inc;
  
    if (chartSpeed) {
      point = chartSpeed.series[0].points[0];
      inc = Math.round((Math.random() - 0.5) * 100);
      newVal = point.y + inc;
  
      if (newVal < 0 || newVal > 200) {
        newVal = point.y - inc;
      }
  
      point.update(newVal);
    }
  
  }, 2000);
  