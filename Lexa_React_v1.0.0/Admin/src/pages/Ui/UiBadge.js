import React,{useEffect} from 'react';
import {
    Col,
    Row,
    Card,
    CardBody,
    Badge,
    CardTitle
} from "reactstrap";
import MetaTags from 'react-meta-tags';

import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

const UiBadge = (props) => {

    const breadcrumbItems = [
        { title: "Lexa", link: "#" },
        { title: "UI Elements", link: "#" },
        { title: "Badge", link: "#" },
    ]

    useEffect(() => {
        props.setBreadcrumbItems('Badge', breadcrumbItems)
    })

    return (
        <React.Fragment>

            <MetaTags>
                <title>Badge | Lexa - Responsive Bootstrap 5 Admin Dashboard</title>
            </MetaTags>

            <Row>
                <Col lg="6">
                    <Card>
                        <CardBody>

                            <CardTitle className="h4">Example</CardTitle>
                            <p className="card-title-desc">Badges scale to match the size of the immediate parent element by using relative font sizing and <code className="highlighter-rouge">em</code> units.</p>

                            <div className="">
                                <h1>Example heading <Badge className="bg-light">New</Badge></h1>
                                <h2>Example heading <Badge className="bg-light">New</Badge></h2>
                                <h3>Example heading <Badge className="bg-light">New</Badge></h3>
                                <h4>Example heading <Badge className="bg-light">New</Badge></h4>
                                <h5>Example heading <Badge className="bg-light">New</Badge></h5>
                                <h6>Example heading <Badge className="bg-light">New</Badge></h6>
                            </div>
                        </CardBody>
                    </Card>
                </Col>

                <Col lg="6">
                    <Card>
                        <CardBody>

                            <CardTitle className="h4">Variations</CardTitle>
                            <p className="card-title-desc">Add any of the below mentioned modifier classNamees to change the appearance of a badge.</p>

                            <div>
                                <Badge color="light" className="bg-light">Light</Badge>{" "}
                                <Badge color="primary" className="bg-primary">Primary</Badge>{" "}
                                <Badge color="success" className="bg-success">Success</Badge>{" "}
                                <Badge color="info" className="bg-info">Info</Badge>{" "}
                                <Badge color="warning" className="bg-warning">Warning</Badge>{" "}
                                <Badge color="danger" className="bg-danger">Danger</Badge>{" "}
                                <Badge color="dark" className="bg-dark">Dark</Badge>{" "}
                            </div>

                            <p className="card-title-desc mt-5">Use the property<code className="highlighter-rouge">pill</code>  to make badges more rounded (with a larger <code className="highlighter-rouge">border-radius</code> and additional horizontal <code className="highlighter-rouge">padding</code>). Useful if you miss the badges from v3.</p>

                            <div>
                                <Badge color="light" className="rounded-pill bg-light">Light</Badge>{" "}
                                <Badge color="primary" className="rounded-pill bg-primary">Primary</Badge>{" "}
                                <Badge color="success" className="rounded-pill bg-success">Success</Badge>{" "}
                                <Badge color="info" className="rounded-pill bg-info">Info</Badge>{" "}
                                <Badge color="warning" className="rounded-pill bg-warning">Warning</Badge>{" "}
                                <Badge color="danger" className="rounded-pill bg-danger">Danger</Badge>{" "}
                                <Badge color="dark" className="rounded-pill bg-dark">Dark</Badge>{" "}
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

        </React.Fragment>
    );

}

export default connect(null, { setBreadcrumbItems })(UiBadge);