import React,{useEffect} from 'react';
import MetaTags from 'react-meta-tags';
import {
    Col,
    Row,
    Card,
    CardBody,
    Pagination,
    PaginationItem,
    PaginationLink
} from "reactstrap";

import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

const UiPagination = (props) => {

    const breadcrumbItems = [
        { title: "Lexa", link: "#" },
        { title: "UI Elements", link: "#" },
        { title: "Pagination", link: "#" },
    ]

    useEffect(() => {
        props.setBreadcrumbItems('Pagination', breadcrumbItems)
    })


    return (
        <React.Fragment>

            <MetaTags>
                <title>Pagination | Lexa - Responsive Bootstrap 5 Admin Dashboard</title>
            </MetaTags>

            <Row>
                <Col lg="6">
                    <Card>
                        <CardBody>
                            <h4 className="card-title">Default Example</h4>
                            <p className="card-title-desc">Pagination links indicate a series of related content exists across multiple pages.</p>

                            <nav aria-label="Page navigation example">
                                <Pagination>
                                    <PaginationItem><PaginationLink href="#">Previous</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink href="#">Next</PaginationLink></PaginationItem>
                                </Pagination>
                            </nav>

                            <nav aria-label="Page navigation example">
                                <Pagination>
                                    <PaginationItem>
                                        <PaginationLink href="#" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                            <span className="sr-only">Previous</span>
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                            <span className="sr-only">Next</span>
                                        </PaginationLink>
                                    </PaginationItem>
                                </Pagination>
                            </nav>
                        </CardBody>
                    </Card>
                </Col>

                <Col lg="6">
                    <Card>
                        <CardBody>

                            <h4 className="card-title">Disabled and active states</h4>
                            <p className="card-title-desc">Pagination links are customizable for different circumstances. Use <code className="highlighter-rouge">.disabled</code> for links that appear un-clickable and <code className="highlighter-rouge">.active</code> to indicate the current page.</p>

                            <nav aria-label="...">
                                <Pagination>
                                    <PaginationItem disabled>
                                        <PaginationLink href="#" tabIndex="-1">Previous</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
                                    <PaginationItem active>
                                        <PaginationLink href="#">2 <span className="sr-only">(current)</span></PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">Next</PaginationLink>
                                    </PaginationItem>
                                </Pagination>
                            </nav>

                            <nav aria-label="...">
                                <ul className="pagination mb-0">
                                    <PaginationItem disabled>
                                        <span className="page-link">Previous</span>
                                    </PaginationItem>
                                    <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
                                    <PaginationItem active>
                                        <span className="page-link">
                                            2
                                                    <span className="sr-only">(current)</span>
                                        </span>
                                    </PaginationItem>
                                    <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">Next</PaginationLink>
                                    </PaginationItem>
                                </ul>
                            </nav>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col lg="6">
                    <Card>
                        <CardBody>

                            <h4 className="card-title">Sizing</h4>
                            <p className="card-title-desc">Fancy larger or smaller pagination? Add
                                        <code className="highlighter-rouge">.pagination-lg</code> or <code className="highlighter-rouge">.pagination-sm</code> for additional sizes.
                                    </p>

                            <nav aria-label="...">
                                <Pagination size="lg">
                                    <PaginationItem disabled>
                                        <PaginationLink href="#" tabIndex="-1">Previous</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">Next</PaginationLink>
                                    </PaginationItem>
                                </Pagination>
                            </nav>

                            <nav aria-label="...">
                                <ul className="pagination pagination-sm mb-0">
                                    <PaginationItem disabled>
                                        <PaginationLink href="#" tabIndex="-1">Previous</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">Next</PaginationLink>
                                    </PaginationItem>
                                </ul>
                            </nav>
                        </CardBody>
                    </Card>
                </Col>

                <Col lg="6">
                    <Card>
                        <CardBody>

                            <h4 className="card-title">Alignment</h4>
                            <p className="card-title-desc">Change the alignment of pagination components with flexbox utilities.</p>

                            <nav aria-label="Page navigation example">
                                <ul className="pagination justify-content-center">
                                    <PaginationItem disabled>
                                        <PaginationLink href="#" tabIndex="-1">Previous</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">Next</PaginationLink>
                                    </PaginationItem>
                                </ul>
                            </nav>

                            <nav aria-label="Page navigation example">
                                <ul className="pagination justify-content-end">
                                    <PaginationItem disabled>
                                        <PaginationLink href="#" tabIndex="-1">Previous</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">Next</PaginationLink>
                                    </PaginationItem>
                                </ul>
                            </nav>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

        </React.Fragment>
    );

}

export default connect(null, { setBreadcrumbItems })(UiPagination);