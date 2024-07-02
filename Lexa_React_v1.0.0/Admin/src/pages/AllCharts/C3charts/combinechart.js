import React, { Component } from 'react';

import C3Chart from 'react-c3js';
import 'c3/c3.css';

class CombineChart extends Component {

    render() {
        const data = {
            columns: [
                ["SonyVaio",30,20,50,40,60,50],
                ["iMacs",200,130,90,240,130,220],
                ["Tablets",300,200,160,400,250,250],
                ["iPhones",200,130,90,240,130,220],
                ["Macbooks",130,120,150,140,160,150]
            ],
            types:{SonyVaio:"bar",iMacs:"bar",Tablets:"spline",iPhones:"line",Macbooks:"bar"},
            colors:{SonyVaio:"#f0f1f4",iMacs:"#7a6fbe",Tablets:"#2f8ee0",iPhones:"#fb4",Macbooks:"#28bbe3"},
            groups:[["SonyVaio","iMacs"]]
          };
          const axis = {
            x:{type:"categorized"}
          };

        return (
            <React.Fragment>
               <C3Chart data={data} axis={axis} />
            </React.Fragment>
        );
    }
}

export default CombineChart;