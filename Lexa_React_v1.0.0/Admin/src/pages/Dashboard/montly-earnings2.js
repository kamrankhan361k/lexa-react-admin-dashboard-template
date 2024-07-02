import React, { Component } from 'react';
import { Row, Col, Card, CardBody } from "reactstrap";
import ReactApexChart from 'react-apexcharts';

class MonthlyEarnings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                colors: ['#28bbe3', '#F0F1F4'],
                chart: {
                    stacked: true,
                    toolbar: {
                        show: false,
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                plotOptions: {
                    bar: {
                        columnWidth: '70%',
                    },
                },
                grid: {
                    borderColor: '#f8f8fa',
                    row: {
                        colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                    },
                },

                xaxis: {
                    categories: [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
                    labels: {
                        formatter: function (val) {
                            return val
                        },
                    },
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    }
                },
                yaxis: {
                    title: {
                        text: undefined
                    },
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return val
                        }
                    }
                },
                fill: {
                    opacity: 1
                },

                legend: {
                    show: false,
                    position: 'top',
                    horizontalAlign: 'left',
                    offsetX: 40
                }
            },
            series: [{
                name: 'Series A',
                data: [45, 75, 100, 75, 100, 75, 50, 75, 50, 75, 100, 80]
            }, {
                name: 'Series B',
                data: [180, 65, 90, 65, 90, 65, 40, 65, 40, 65, 90, 65]
            }],
        }
    }
    render() {
        return (
            <React.Fragment>
                <Card>
                    <CardBody>
                        <h4 className="card-title mb-4">Monthly Earnings</h4>

                        <Row className="text-center mt-4">
                            <Col xs="6">
                                <h5 className="font-size-20">$ 2548</h5>
                                <p className="text-muted">Marketplace</p>
                            </Col>
                            <Col xs="6">
                                <h5 className="font-size-20">$ 6985</h5>
                                <p className="text-muted">Total Income</p>
                            </Col>
                        </Row>

                        <div id="morris-bar-stacked" className="morris-charts morris-charts-height" dir="ltr">
                            <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height="290" />
                        </div>
                    </CardBody>
                </Card>
            </React.Fragment>
        );
    }
}

export default MonthlyEarnings;