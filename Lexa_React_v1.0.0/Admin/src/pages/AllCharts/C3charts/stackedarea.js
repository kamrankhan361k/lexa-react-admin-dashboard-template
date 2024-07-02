import React, { Component } from 'react';

import C3Chart from 'react-c3js';
import 'c3/c3.css';

class StackedArea extends Component {

    render() {
        const data = {
            columns: [
                ["Revenue",130,120,150,140,160,150,130,120,150,140,160,150],
                ["Pageview",200,130,90,240,130,220,200,130,90,240,130,220]
            ],
            types: {Revenue:"area-spline",Pageview:"area-spline"},
            colors: {Revenue:"#f0f1f4",Pageview:"#28bbe3"}
          };
        return (
            <React.Fragment>
               <C3Chart data={data} />
            </React.Fragment>
        );
    }
}

export default StackedArea;