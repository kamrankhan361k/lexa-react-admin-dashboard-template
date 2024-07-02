import React, { Component } from 'react';
import { Row, Col, Card, CardBody } from "reactstrap";
import ReactApexChart from 'react-apexcharts';

class MonthlyEarnings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                colors: ['#ccc', '#7a6fbe', '#28bbe3'],
                chart: {
                    toolbar: {
                        show: !1,
                    },
                },
                dataLabels: {
                    enabled: !1
                },
                stroke: {
                    curve: 'smooth',
                    width: 0.1,
                },
                grid: {
                    borderColor: '#f8f8fa',
                    row: {
                        colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                    },
                },
                xaxis: {
                    categories: ['2011', '2012', '2013' , '2014', '2015', '2016', '2017'],
                    axisBorder: {
                        show: !1
                    },
                    axisTicks: {
                        show: !1
                    }
                },
                legend: {
                    show: !1
                },
            },
            series: [
                {
                    name: 'Series A',
                    data: [0, 150, 60, 180, 90, 75, 30]
                },
                {
                    name: 'Series B',
                    data: [0, 45, 150, 36, 60, 240, 30]
                },
                {
                    name: 'Series C',
                    data: [0, 15, 195, 21, 360, 120, 30]
                }
            ],
        }
    }
    render() {
        return (
            <React.Fragment>
                <Card>
                    <CardBody>
                        <h4 className="card-title mb-4">Email Sent</h4>

                        <Row className="text-center mt-4">
                            <Col xs="4">
                                <h5 className="font-size-20">$ 89425</h5>
                                <p className="text-muted">Marketplace</p>
                            </Col>
                            <Col xs="4">
                                <h5 className="font-size-20">$ 56210</h5>
                                <p className="text-muted">Total Income</p>
                            </Col>
                            <Col xs="4">
                                <h5 className="font-size-20">$ 8974</h5>
                                <p className="text-muted">Last Month</p>
                            </Col>
                        </Row>

                        <div id="morris-area-example" className="morris-charts morris-charts-height" dir="ltr">
                            <ReactApexChart options={this.state.options} series={this.state.series} type="area" height="300" />
                        </div>
                    </CardBody>
                </Card>
            </React.Fragment>
        );
    }
}

export default MonthlyEarnings;