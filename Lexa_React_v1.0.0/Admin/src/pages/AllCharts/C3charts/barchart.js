import React, { Component } from 'react';

import C3Chart from 'react-c3js';
import 'c3/c3.css';

class BarChart extends Component {

    render() {
        const data = {
            columns: [
              ["Desktop",150,80,70,152,250,95],
              ["Mobile",200,130,90,240,130,220],
              ["Tablet",300,200,160,400,250,250]
            ],
            type: 'bar',
            colors:{Desktop:"#f0f1f4",Mobile:"#7a6fbe",Tablet:"#28bbe3"}
          };
        return (
            <React.Fragment>
               <C3Chart data={data} />
            </React.Fragment>
        );
    }
}

export default BarChart;