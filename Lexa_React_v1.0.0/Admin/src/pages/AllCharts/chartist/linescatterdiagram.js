import React, { Component } from "react";
import ChartistGraph from "react-chartist";

class LineScatterDiagram extends Component {
  render() {
    var times = (n) => {
        return Array.apply(null, new Array(n));
      };
      
      var data = times(52).map(Math.random).reduce((data, rnd, index) => {
        data.labels.push(index + 1);
        data.series.forEach((series) => {
          series.push(Math.random() * 100)
        });
      
        return data;
      }, {
        labels: [],
        series: times(4).map(() => { return []; })
      });
      
      var options = {
        showLine: false,
        axisX: {
          labelInterpolationFnc: (value, index) => {
            return index % 13 === 0 ? 'W' + value : null;
          }
        }
      };
      
      var responsiveOptions = [
        ['screen and (min-width: 640px)', {
          axisX: {
            labelInterpolationFnc: function(value, index) {
              return index % 4 === 0 ? 'W' + value : null;
            }
          }
        }]
      ];

    return (
      <React.Fragment>
        <ChartistGraph
          data={data}
          style={{ height: "300px"}}
          options={options}
          type={"Line"}
          responsiveOptions={responsiveOptions}
        />
      </React.Fragment>
    );
  }
}

export default LineScatterDiagram;
