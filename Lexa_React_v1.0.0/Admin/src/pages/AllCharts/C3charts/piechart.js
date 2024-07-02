import React, { Component } from 'react';

import C3Chart from 'react-c3js';
import 'c3/c3.css';

class PieChart extends Component {

    render() {
        const data = {
            columns: [
                ["Desktops",78],["Smart Phones",55],["Mobiles",40],["Tablets",25]
            ],
            type:"pie",
          };
          const color = {pattern:["#f0f1f4","#7a6fbe","#28bbe3","#2f8ee0"]}
          const pie = {
              label:{show:!1}
            }

        return (
            <React.Fragment>
               <C3Chart data={data} pie={pie} color={color}/>
            </React.Fragment>
        );
    }
}

export default PieChart;