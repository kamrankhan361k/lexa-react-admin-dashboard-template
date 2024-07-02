import React, { useEffect } from 'react';
import {
    Col,
    Row,
    Card,
    CardBody,
    Button,
    UncontrolledPopover,
    PopoverBody,
    PopoverHeader,
    UncontrolledTooltip
} from "reactstrap";
import MetaTags from 'react-meta-tags';

import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

const UiPopoverTooltips = (props) => {

    const breadcrumbItems = [
        { title: "Lexa", link: "#" },
        { title: "UI Elements", link: "#" },
        { title: "Popover & Tooltips", link: "#" },
    ]

    useEffect(() => {
        props.setBreadcrumbItems('Popover & Tooltips', breadcrumbItems)
    })

    return (
        <React.Fragment>

            <MetaTags>
                <title>Popover & Tooltips | Lexa - Responsive Bootstrap 5 Admin Dashboard</title>
            </MetaTags>

            <Row>
                <Col xs="12">
                    <Card>
                        <CardBody>
                            <h4 className="card-title">Popovers</h4>
                            <p className="card-title-desc">Add small overlay content, like those found in iOS, to any element for housing secondary information.</p>

                            <div className="button-items" id="popover-container">

                                <Button type="button" id="popover1" color="light" className="waves-effect" data-container="body">
                                    Popover on top
                                    </Button>{" "}
                                <UncontrolledPopover target="popover1" placement="top">
                                    <PopoverBody>
                                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                                    </PopoverBody>
                                </UncontrolledPopover>

                                <Button type="button" id="popover2" color="light" className="waves-effect" data-container="body">
                                    Popover on right
                                    </Button>{" "}
                                <UncontrolledPopover target="popover2" placement="right">
                                    <PopoverBody>
                                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                                    </PopoverBody>
                                </UncontrolledPopover>

                                <Button type="button" id="popover3" color="light" className="waves-effect" data-container="body">
                                    Popover on bottom
                                    </Button>{" "}
                                <UncontrolledPopover target="popover3" placement="bottom">
                                    <PopoverBody>
                                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                                    </PopoverBody>
                                </UncontrolledPopover>

                                <Button type="button" id="popover4" color="light" className="waves-effect" data-container="body">
                                    Popover on left
                                    </Button>{" "}
                                <UncontrolledPopover target="popover4" placement="left">
                                    <PopoverBody>
                                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                                    </PopoverBody>
                                </UncontrolledPopover>

                                <Button type="button" color="primary" id="popover5" className="waves-effect waves-light">Dismissible popover</Button>{" "}

                                <UncontrolledPopover trigger="focus" target="popover5" placement="right">
                                    <PopoverHeader>
                                        Dismissible popover
                                    </PopoverHeader>
                                    <PopoverBody>
                                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                                    </PopoverBody>
                                </UncontrolledPopover>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col xs="12">
                    <Card>
                        <CardBody>

                            <h4 className="card-title">Tooltips</h4>
                            <p className="card-title-desc">Hover over the links below to see tooltips:</p>
                            <div className="button-items">


                                <Button type="button" color="secondary" className="mo-mb-2 me-1 me-1" id="tooltip1">
                                    Tooltip on top
                                </Button>
                                <UncontrolledTooltip placement="top" target="tooltip1">
                                    Tooltip on top
                                </UncontrolledTooltip>

                                <Button type="button" color="secondary" className="mo-mb-2 me-1 me-1" id="tooltip2">
                                    Tooltip on right
                                </Button>
                                <UncontrolledTooltip placement="right" target="tooltip2">
                                    Tooltip on right
                                </UncontrolledTooltip>

                                <Button type="button" color="secondary" className="mo-mb-2 me-1 me-1" id="tooltip3">
                                    Tooltip on bottom
                                </Button>
                                <UncontrolledTooltip placement="bottom" target="tooltip3">
                                    Tooltip on bottom
                                </UncontrolledTooltip>

                                <Button type="button" color="secondary" className="mo-mb-2 me-1 me-1" id="tooltip4">
                                    Tooltip on left
                                </Button>
                                <UncontrolledTooltip placement="left" target="tooltip4">
                                    Tooltip on left
                                        </UncontrolledTooltip>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

        </React.Fragment>
    );
}

export default connect(null, { setBreadcrumbItems })(UiPopoverTooltips);