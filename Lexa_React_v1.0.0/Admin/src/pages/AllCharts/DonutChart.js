import React, { Component } from 'react';

import C3Chart from 'react-c3js';
import 'c3/c3.css';

class DonutChart extends Component {

    render() {
        const data = {
            columns: [
                ['Download Sales', 12],
                ['In-Store Sales', 30],
                ['Mail-Order Sales', 20]
            ],
            type: "donut",
        };

        const donut = {
            title: "In-Store Sales 30",
            width: 30,
            label: { show: !1 }
        };

        const color = {
            pattern: ['#f0f1f4', '#7a6fbe', '#28bbe3']
        };

        const size = {
            height: 300
        };

        return (
            <React.Fragment>
                <C3Chart data={data} donut={donut} color={color} size={size} dir="ltr" />
            </React.Fragment>
        );
    }
}

export default DonutChart;