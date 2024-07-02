import React, {useEffect} from 'react';
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

// import C3charts
import BarChart from "../AllCharts/C3charts/barchart";
import StackedArea from "../AllCharts/C3charts/stackedarea";
import RoatedChart from "../AllCharts/C3charts/roatedchart";
import CombineChart from "../AllCharts/C3charts/combinechart";
import DonutChart from "../AllCharts/C3charts/donutchart";
import PieChart from "../AllCharts/C3charts/piechart";

const ChartsC3 = (props) => {
    const breadcrumbItems = [
        { title: "Lexa", link: "#" },
        { title: "Charts", link: "#" },
        { title: "C3 Chart", link: "#" },
    ]

    useEffect(() => {
        props.setBreadcrumbItems('C3 Chart', breadcrumbItems)
    })

    return (
        <React.Fragment>

            <MetaTags>
                <title>C3 Chart | Lexa - Responsive Bootstrap 5 Admin Dashboard</title>
            </MetaTags>

            <Row>
                <Col lg="6">
                    <Card className="m-b-20">
                        <CardBody>

                            <h4 className="card-title mb-4">Bar Chart</h4>

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
                                    <p className="text-muted" dir="ltr">Deactivated</p>
                                </div>
                            </div>
                            <div id="chart" dir="ltr">
                                <BarChart />
                            </div>
                        </CardBody>
                    </Card>
                </Col>


                <Col lg="6">
                    <Card className="m-b-20">
                        <CardBody>

                            <h4 className="card-title mb-4">Stacked Area Chart</h4>

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

                            <div id="chart-stacked" dir="ltr">
                                <StackedArea />
                            </div>

                        </CardBody>
                    </Card>
                </Col>

            </Row>


            <Row>
                <Col lg="6">
                    <Card className="m-b-20">
                        <CardBody>

                            <h4 className="card-title mb-4">Roated Chart</h4>

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

                            <div id="roated-chart" dir="ltr">
                                <RoatedChart />
                            </div>
                        </CardBody>
                    </Card>
                </Col>


                <Col lg="6">
                    <Card className="m-b-20">
                        <CardBody>

                            <h4 className="card-title mb-4">Combine Chart</h4>

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

                            <div id="combine-chart" dir="ltr">
                                <CombineChart />
                            </div>

                        </CardBody>
                    </Card>
                </Col>

            </Row>


            <Row>
                <Col lg="6">
                    <Card className="m-b-20">
                        <CardBody>

                            <h4 className="card-title mb-4">Donut Chart</h4>

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

                            <div id="donut-chart" dir="ltr">
                                <DonutChart />
                            </div>

                        </CardBody>
                    </Card>
                </Col>


                <Col lg="6">
                    <Card className="m-b-20">
                        <CardBody>

                            <h4 className="card-title mb-4">Pie Chart</h4>

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

                            <div id="pie-chart" dir="ltr">
                                <PieChart />
                            </div>

                        </CardBody>
                    </Card>
                </Col>

            </Row>

        </React.Fragment>
    );
}

export default connect(null, { setBreadcrumbItems })(ChartsC3);