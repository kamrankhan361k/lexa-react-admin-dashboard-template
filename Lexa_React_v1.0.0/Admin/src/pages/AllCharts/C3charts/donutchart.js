import React, { Component } from 'react';

import C3Chart from 'react-c3js';
import 'c3/c3.css';

class DonutChart extends Component {

    render() {
        const data = {
            columns: [
                ["Desktops",78],
                ["Smart Phones",55],
                ["Mobiles",40],
                ["Tablets",25]
            ],
            type:"donut",
          };

        const donut = {
              title:"Candidates",
              width:30,
              label:{show:!1}
        };

        const color = {
            pattern:["#f0f1f4","#7a6fbe","#28bbe3","#2f8ee0"]
        };
        
        return (
            <React.Fragment>
               <C3Chart data={data} donut={donut} color={color} />
            </React.Fragment>
        );
    }
}

export default DonutChart;