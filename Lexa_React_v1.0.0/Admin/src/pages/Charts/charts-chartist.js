import React, { useEffect } from 'react';
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

// import charts
import BarChart from "../AllCharts/chartist/barchart";
import StackBarChart from "../AllCharts/chartist/stackedbarchart";
import DountChart from "../AllCharts/chartist/dountchart";
import PieChart from "../AllCharts/chartist/piechart";
import SmilAnimationsChart from "../AllCharts/chartist/smilanimations";
import LineChart from "../AllCharts/chartist/linechart";
import LineAreaChart from "../AllCharts/chartist/lineareachart";
import LineScatterDiagram from "../AllCharts/chartist/linescatterdiagram";

import "chartist/dist/scss/chartist.scss";


const ChartsChartist = (props) => {
    const breadcrumbItems = [
        { title: "Lexa", link: "#" },
        { title: "Charts", link: "#" },
        { title: "Chartist Chart", link: "#" },
    ]

    useEffect(() => {
        props.setBreadcrumbItems('Chartist Chart', breadcrumbItems)
    })

    return (
        <React.Fragment>

            <MetaTags>
                <title>Chartist Chart | Lexa - Responsive Bootstrap 5 Admin Dashboard</title>
            </MetaTags>

            <Row>
                <Col lg="6">
                    <Card>
                        <CardBody>

                            <h4 className="card-title mb-4">Overlapping bars on mobile</h4>

                            <Row className="text-center mt-4">
                                <Col sm="4">
                                    <h5 className="mb-0 font-size-20">86541</h5>
                                    <p className="text-muted">Activated</p>
                                </Col>
                                <Col sm="4">
                                    <h5 className="mb-0 font-size-20">2541</h5>
                                    <p className="text-muted">Pending</p>
                                </Col>
                                <Col sm="4">
                                    <h5 className="mb-0 font-size-20">102030</h5>
                                    <p className="text-muted">Deactivated</p>
                                </Col>
                            </Row>

                            <div dir="ltr">
                                <BarChart />
                            </div>

                        </CardBody>
                    </Card>
                </Col>


                <Col lg="6">
                    <Card>
                        <CardBody>

                            <h4 className="card-title mb-4">Stacked bar chart</h4>

                            <Row className="text-center mt-4">
                                <Col sm="4">
                                    <h5 className="mb-0 font-size-20">5241</h5>
                                    <p className="text-muted">Activated</p>
                                </Col>
                                <Col sm="4">
                                    <h5 className="mb-0 font-size-20">65411</h5>
                                    <p className="text-muted">Pending</p>
                                </Col>
                                <Col sm="4">
                                    <h5 className="mb-0 font-size-20">51654</h5>
                                    <p className="text-muted">Deactivated</p>
                                </Col>
                            </Row>

                            <div dir="ltr">
                                <StackBarChart />
                            </div>
                        </CardBody>
                    </Card>
                </Col>

            </Row>


            <Row>
                <Col lg="6">
                    <Card>
                        <CardBody>

                            <h4 className="card-title mb-4">Animating a Donut with Svg.animate</h4>

                            <Row className="text-center mt-4">
                                <Col sm="4">
                                    <h5 className="mb-0 font-size-20">748949</h5>
                                    <p className="text-muted">Activated</p>
                                </Col>
                                <Col sm="4">
                                    <h5 className="mb-0 font-size-20">5181</h5>
                                    <p className="text-muted">Pending</p>
                                </Col>
                                <Col sm="4">
                                    <h5 className="mb-0 font-size-20">101025</h5>
                                    <p className="text-muted">Deactivated</p>
                                </Col>
                            </Row>

                            <div dir="ltr">
                                <DountChart />
                            </div>

                        </CardBody>
                    </Card>
                </Col>


                <Col lg="6">
                    <Card>
                        <CardBody>

                            <h4 className="card-title mb-4">Simple pie chart</h4>

                            <Row className="text-center mt-4">
                                <Col sm="4">
                                    <h5 className="mb-0 font-size-20">48484</h5>
                                    <p className="text-muted">Activated</p>
                                </Col>
                                <Col sm="4">
                                    <h5 className="mb-0 font-size-20">48652</h5>
                                    <p className="text-muted">Pending</p>
                                </Col>
                                <Col sm="4">
                                    <h5 className="mb-0 font-size-20">85412</h5>
                                    <p className="text-muted">Deactivated</p>
                                </Col>
                            </Row>

                            <div dir="ltr">
                                <PieChart />
                            </div>

                        </CardBody>
                    </Card>
                </Col>

            </Row>


            <Row>
                <Col lg="6">
                    <Card>
                        <CardBody>

                            <h4 className="card-title mb-4">Advanced Smil Animations</h4>

                            <Row className="text-center mt-4">
                                <Col sm="4">
                                    <h5 className="mb-0 font-size-20">45410</h5>
                                    <p className="text-muted">Activated</p>
                                </Col>
                                <Col sm="4">
                                    <h5 className="mb-0 font-size-20">4442</h5>
                                    <p className="text-muted">Pending</p>
                                </Col>
                                <Col sm="4">
                                    <h5 className="mb-0 font-size-20">3201</h5>
                                    <p className="text-muted">Deactivated</p>
                                </Col>
                            </Row>

                            <div dir="ltr">
                                <SmilAnimationsChart />
                            </div>

                        </CardBody>
                    </Card>
                </Col>


                <Col lg="6">
                    <Card>
                        <CardBody>

                            <h4 className="card-title mb-4">Simple line chart</h4>

                            <Row className="text-center mt-4">
                                <Col sm="4">
                                    <h5 className="mb-0 font-size-20">44242</h5>
                                    <p className="text-muted">Activated</p>
                                </Col>
                                <Col sm="4">
                                    <h5 className="mb-0 font-size-20">75221</h5>
                                    <p className="text-muted">Pending</p>
                                </Col>
                                <Col sm="4">
                                    <h5 className="mb-0 font-size-20">65212</h5>
                                    <p className="text-muted">Deactivated</p>
                                </Col>
                            </Row>

                            <div dir="ltr">
                                <LineChart />
                            </div>

                        </CardBody>
                    </Card>
                </Col>

            </Row>


            <Row>
                <Col lg="6">
                    <Card>
                        <CardBody>

                            <h4 className="card-title mb-4">Line Scatter Diagram</h4>

                            <Row className="text-center mt-4">
                                <Col sm="4">
                                    <h5 className="mb-0 font-size-20">5677</h5>
                                    <p className="text-muted">Activated</p>
                                </Col>
                                <Col sm="4">
                                    <h5 className="mb-0 font-size-20">5542</h5>
                                    <p className="text-muted">Pending</p>
                                </Col>
                                <Col sm="4">
                                    <h5 className="mb-0 font-size-20">12422</h5>
                                    <p className="text-muted">Deactivated</p>
                                </Col>
                            </Row>

                            <div dir="ltr">
                                <LineScatterDiagram />
                            </div>

                        </CardBody>
                    </Card>
                </Col>


                <Col lg="6">
                    <Card>
                        <CardBody>

                            <h4 className="card-title mb-4">Line chart with area</h4>

                            <Row className="text-center mt-4">
                                <Col sm="4">
                                    <h5 className="mb-0 font-size-20">4234</h5>
                                    <p className="text-muted">Activated</p>
                                </Col>
                                <Col sm="4">
                                    <h5 className="mb-0 font-size-20">64521</h5>
                                    <p className="text-muted">Pending</p>
                                </Col>
                                <Col sm="4">
                                    <h5 className="mb-0 font-size-20">94521</h5>
                                    <p className="text-muted">Deactivated</p>
                                </Col>
                            </Row>

                            <div dir="ltr">
                                <LineAreaChart />
                            </div>

                        </CardBody>
                    </Card>
                </Col>

            </Row>

        </React.Fragment>
    );

}

export default connect(null, { setBreadcrumbItems })(ChartsChartist);