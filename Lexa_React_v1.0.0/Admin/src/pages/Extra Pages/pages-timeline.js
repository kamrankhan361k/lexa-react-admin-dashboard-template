import React, { useEffect } from 'react';
import {
    Col,
    Row,
    Card,
    CardBody
} from "reactstrap";
import { Link } from "react-router-dom";

import MetaTags from 'react-meta-tags';

import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

//Import Images
import img1 from "../../assets/images/small/img-1.jpg";
import img2 from "../../assets/images/small/img-2.jpg";

const PagesTimeline = (props) => {

    const breadcrumbItems = [
        { title: "Lexa", link: "#" },
        { title: "Pages", link: "#" },
        { title: "Timeline", link: "#" },
    ]

    useEffect(() => {
        props.setBreadcrumbItems('Timeline', breadcrumbItems)
    })

    return (
        <React.Fragment>

            <MetaTags>
                <title>Timeline | Lexa - Responsive Bootstrap 5 Admin Dashboard</title>
            </MetaTags>

            <Row>
                <Col xs="12">
                    <Card>
                        <CardBody>

                            <section id="cd-timeline" className="cd-container" dir="ltr">
                                <div className="cd-timeline-block timeline-right">
                                    <div className="cd-timeline-img bg-success">
                                        <i className="mdi mdi-adjust"></i>
                                    </div>


                                    <div className="cd-timeline-content">
                                        <h3>Timeline Event One</h3>
                                        <p className="mb-0 text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p>
                                        <span className="cd-date">May 23</span>
                                    </div>

                                </div>


                                <div className="cd-timeline-block timeline-left">
                                    <div className="cd-timeline-img bg-danger">
                                        <i className="mdi mdi-adjust"></i>
                                    </div>


                                    <div className="cd-timeline-content">
                                        <h3>Timeline Event Two</h3>
                                        <p className="mb-4 text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium</p>
                                        <button type="button" className="btn btn-primary btn-rounded waves-effect waves-light m-t-5">See more detail</button>

                                        <span className="cd-date">May 30</span>
                                    </div>
                                </div>

                                <div className="cd-timeline-block timeline-right">
                                    <div className="cd-timeline-img bg-info">
                                        <i className="mdi mdi-adjust"></i>
                                    </div>


                                    <div className="cd-timeline-content">
                                        <h3>Timeline Event Three</h3>
                                        <p className="mb-0 text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, obcaecati, quisquam id molestias eaque error assumenda delectus. Odit, itaque, deserunt corporis vero ipsum nisi eius odio natus ullam provident pariatur temporibus quia eos repellat ... <Link to="#" className="text-primary">Read more</Link></p>
                                        <span className="cd-date">Jun 05</span>
                                    </div>
                                </div>

                                <div className="cd-timeline-block timeline-left">
                                    <div className="cd-timeline-img bg-pink">
                                        <i className="mdi mdi-adjust"></i>
                                    </div>

                                    <div className="cd-timeline-content">
                                        <h3>Timeline Event Four</h3>
                                        <p className="mb-4 text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut.</p>
                                        <img src={img1} alt="" className="rounded" width="120" />{" "}
                                        <img src={img2} alt="" className="rounded" width="120" />
                                        <span className="cd-date">Jun 14</span>
                                    </div>
                                </div>
                                <div className="cd-timeline-block timeline-right">
                                    <div className="cd-timeline-img bg-warning">
                                        <i className="mdi mdi-adjust"></i>
                                    </div>

                                    <div className="cd-timeline-content">
                                        <h3>Timeline Event Five</h3>
                                        <p className="mb-4 text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum.</p>
                                        <button type="button" className="btn btn-primary btn-rounded waves-effect waves-light">See more detail</button>
                                        <span className="cd-date">Jun 18</span>
                                    </div>
                                </div>

                                <div className="cd-timeline-block">

                                    <div className="cd-timeline-img bg-primary d-xl-none">
                                        <i className="mdi mdi-adjust"></i>
                                    </div>

                                    <div className="cd-timeline-content">
                                        <h3>Timeline Event End</h3>
                                        <p className="mb-0 text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, obcaecati, quisquam id molestias eaque asperiores voluptatibus cupiditate error assumenda delectus odit similique earum voluptatem doloremque dolorem ipsam quae rerum quis. Deserunt corporis vero ipsum nisi eius odio natus ullam provident pariatur temporibus quia eos repellat consequuntur.</p>
                                        <span className="cd-date">Jun 30</span>
                                    </div>
                                </div>

                            </section>


                        </CardBody>
                    </Card>
                </Col>

            </Row>

        </React.Fragment>
    );
}

export default connect(null, { setBreadcrumbItems })(PagesTimeline);