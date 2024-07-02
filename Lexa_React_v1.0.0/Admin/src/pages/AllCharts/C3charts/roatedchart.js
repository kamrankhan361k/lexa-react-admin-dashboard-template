import React, { Component } from 'react';

import C3Chart from 'react-c3js';
import 'c3/c3.css';

class RoatedChart extends Component {

    render() {
        const data = {
            columns: [
              ["Revenue",30,200,100,400,150,250],
              ["Pageview",50,20,10,40,15,25]
            ],
            types:{Revenue:"bar"},
            colors:{Revenue:"#f0f1f4",Pageview:"#28bbe3"}
          };
          const axis = {
            rotated:!0,x:{type:"categorized"}
          };

        return (
            <React.Fragment>
               <C3Chart data={data} axis={axis} />
            </React.Fragment>
        );
    }
}

export default RoatedChart;