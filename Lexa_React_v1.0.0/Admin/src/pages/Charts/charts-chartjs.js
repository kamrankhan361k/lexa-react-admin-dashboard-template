import React,{useEffect} from 'react';
import {
    Col,
    Row,
    Card,
    CardBody
} from "reactstrap";

import MetaTags from 'react-meta-tags';

import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

// import chartJs
import LineChart from "../AllCharts/chartjs/linechart";
import DountChart from "../AllCharts/chartjs/dountchart";
import PieChart from "../AllCharts/chartjs/piechart";
import BarChart from "../AllCharts/chartjs/barchart";
import RadarChart from "../AllCharts/chartjs/radarchart";
import PolarChart from "../AllCharts/chartjs/polarchart";

const ChartsJs = (props) => {
    const breadcrumbItems = [
        { title: "Lexa", link: "#" },
        { title: "Charts", link: "#" },
        { title: "Chartjs Chart", link: "#" },
    ]

    useEffect(() => {
        props.setBreadcrumbItems('Chartjs Chart', breadcrumbItems)
    })

    return (
        <React.Fragment>

            <MetaTags>
                <title>Chartjs Chart | Lexa - Responsive Bootstrap 5 Admin Dashboard</title>
            </MetaTags>


            <Row>
                <Col lg="6">
                    <Card>
                        <CardBody>

                            <h4 className="card-title mb-4">Line Chart</h4>

                            <div className="row text-center mt-4">
                                <div className="col-sm-4">
                                    <h5 className="mb-0 font-size-20">86541</h5>
                                    <p className="text-muted">Activated</p>
                                </div>
                                <div className="col-sm-4">
                                    <h5 className="mb-0 font-size-20">2541</h5>
                                    <p className="text-muted">Pending</p>
                                </div>
                                <div className="col-sm-4">
                                    <h5 className="mb-0 font-size-20">102030</h5>
                                    <p className="text-muted">Deactivated</p>
                                </div>
                            </div>

                            <LineChart />

                        </CardBody>
                    </Card>
                </Col>


                <Col lg="6">
                    <Card>
                        <CardBody>

                            <h4 className="card-title mb-4">Bar Chart</h4>

                            <div className="row text-center mt-4">
                                <div className="col-sm-4">
                                    <h5 className="mb-0 font-size-20">2541</h5>
                                    <p className="text-muted">Activated</p>
                                </div>
                                <div className="col-sm-4">
                                    <h5 className="mb-0 font-size-20">84845</h5>
                                    <p className="text-muted">Pending</p>
                                </div>
                                <div className="col-sm-4">
                                    <h5 className="mb-0 font-size-20">12001</h5>
                                    <p className="text-muted">Deactivated</p>
                                </div>
                            </div>

                            <BarChart />

                        </CardBody>
                    </Card>
                </Col>

            </Row>


            <Row>
                <Col lg="6">
                    <Card>
                        <CardBody>

                            <h4 className="card-title mb-4">Pie Chart</h4>

                            <div className="row text-center mt-4">
                                <div className="col-sm-4">
                                    <h5 className="mb-0 font-size-20">2536</h5>
                                    <p className="text-muted">Activated</p>
                                </div>
                                <div className="col-sm-4">
                                    <h5 className="mb-0 font-size-20">69421</h5>
                                    <p className="text-muted">Pending</p>
                                </div>
                                <div className="col-sm-4">
                                    <h5 className="mb-0 font-size-20">89854</h5>
                                    <p className="text-muted">Deactivated</p>
                                </div>
                            </div>

                            <PieChart />

                        </CardBody>
                    </Card>
                </Col>


                <Col lg="6">
                    <Card>
                        <CardBody>

                            <h4 className="card-title mb-4">Donut Chart</h4>

                            <div className="row text-center mt-4">
                                <div className="col-sm-4">
                                    <h5 className="mb-0 font-size-20">9595</h5>
                                    <p className="text-muted">Activated</p>
                                </div>
                                <div className="col-sm-4">
                                    <h5 className="mb-0 font-size-20">36524</h5>
                                    <p className="text-muted">Pending</p>
                                </div>
                                <div className="col-sm-4">
                                    <h5 className="mb-0 font-size-20">62541</h5>
                                    <p className="text-muted">Deactivated</p>
                                </div>
                            </div>

                            <DountChart />

                        </CardBody>
                    </Card>
                </Col>

            </Row>


            <Row>
                <Col lg="6">
                    <Card>
                        <CardBody>

                            <h4 className="card-title mb-4">Polar Chart</h4>

                            <div className="row text-center mt-4">
                                <div className="col-sm-4">
                                    <h5 className="mb-0 font-size-20">4852</h5>
                                    <p className="text-muted">Activated</p>
                                </div>
                                <div className="col-sm-4">
                                    <h5 className="mb-0 font-size-20">3652</h5>
                                    <p className="text-muted">Pending</p>
                                </div>
                                <div className="col-sm-4">
                                    <h5 className="mb-0 font-size-20">85412</h5>
                                    <p className="text-muted">Deactivated</p>
                                </div>
                            </div>

                            <PolarChart />

                        </CardBody>
                    </Card>
                </Col>


                <Col lg="6">
                    <Card>
                        <CardBody>

                            <h4 className="card-title mb-4">Radar Chart</h4>

                            <div className="row text-center mt-4">
                                <div className="col-sm-4">
                                    <h5 className="mb-0 font-size-20">694</h5>
                                    <p className="text-muted">Activated</p>
                                </div>
                                <div className="col-sm-4">
                                    <h5 className="mb-0 font-size-20">55210</h5>
                                    <p className="text-muted">Pending</p>
                                </div>
                                <div className="col-sm-4">
                                    <h5 className="mb-0 font-size-20">489498</h5>
                                    <p className="text-muted">Deactivated</p>
                                </div>

                                <RadarChart />

                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

        </React.Fragment>
    );
}

export default connect(null, { setBreadcrumbItems })(ChartsJs);