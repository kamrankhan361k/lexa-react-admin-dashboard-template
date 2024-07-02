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
import imgdark from "../../assets/images/logo-dark.png";

const PagesInvoice = (props) => {
    const breadcrumbItems = [
        { title: "Lexa", link: "#" },
        { title: "Pages", link: "#" },
        { title: "Invoice", link: "#" },
    ]

    useEffect(() => {
        props.setBreadcrumbItems('Invoice', breadcrumbItems)
    })

    //Print the Invoice
    const printInvoice = () => {
        window.print()
    }

    return (
        <React.Fragment>
            <MetaTags>
                <title>Invoice | Lexa - Responsive Bootstrap 5 Admin Dashboard</title>
            </MetaTags>
            <Row>
                <Col xs="12">
                    <Card>
                        <CardBody>

                            <Row>
                                <Col xs="12">
                                    <div className="invoice-title">
                                        <h4 className="float-end font-size-16"><strong>Order # 12345</strong></h4>
                                        <h3 className="mt-0">
                                            <img src={imgdark} alt="logo" height="24" />
                                        </h3>
                                    </div>
                                    <hr />
                                    <Row>
                                        <Col xs="6">
                                            <address>
                                                <strong>Billed To:</strong><br />
                                                            John Smith<br />
                                                            1234 Main<br />
                                                            Apt. 4B<br />
                                                            Springfield, ST 54321
                                                        </address>
                                        </Col>
                                        <Col xs="6" className="text-end">
                                            <address>
                                                <strong>Shipped To:</strong><br />
                                                            Kenny Rigdon<br />
                                                            1234 Main<br />
                                                            Apt. 4B<br />
                                                            Springfield, ST 54321
                                                        </address>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs="6" className="mt-4">
                                            <address>
                                                <strong>Payment Method:</strong><br />
                                                            Visa ending **** 4242<br />
                                                            jsmith@email.com
                                                        </address>
                                        </Col>
                                        <Col xs="6" className="mt-4 text-end">
                                            <address>
                                                <strong>Order Date:</strong><br />
                                                            October 7, 2016<br /><br />
                                            </address>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs="12">
                                    <div>
                                        <div className="p-2">
                                            <h3 className="font-size-16"><strong>Order summary</strong></h3>
                                        </div>
                                        <div className="">
                                            <div className="table-responsive">
                                                <table className="table">
                                                    <thead>
                                                        <tr>
                                                            <td><strong>Item</strong></td>
                                                            <td className="text-center"><strong>Price</strong></td>
                                                            <td className="text-center"><strong>Quantity</strong>
                                                            </td>
                                                            <td className="text-end"><strong>Totals</strong></td>
                                                        </tr>
                                                    </thead>
                                                    <tbody>

                                                        <tr>
                                                            <td>BS-200</td>
                                                            <td className="text-center">$10.99</td>
                                                            <td className="text-center">1</td>
                                                            <td className="text-end">$10.99</td>
                                                        </tr>
                                                        <tr>
                                                            <td>BS-400</td>
                                                            <td className="text-center">$20.00</td>
                                                            <td className="text-center">3</td>
                                                            <td className="text-end">$60.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>BS-1000</td>
                                                            <td className="text-center">$600.00</td>
                                                            <td className="text-center">1</td>
                                                            <td className="text-end">$600.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="thick-line"></td>
                                                            <td className="thick-line"></td>
                                                            <td className="thick-line text-center">
                                                                <strong>Subtotal</strong></td>
                                                            <td className="thick-line text-end">$670.99</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="no-line"></td>
                                                            <td className="no-line"></td>
                                                            <td className="no-line text-center">
                                                                <strong>Shipping</strong></td>
                                                            <td className="no-line text-end">$15</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="no-line"></td>
                                                            <td className="no-line"></td>
                                                            <td className="no-line text-center">
                                                                <strong>Total</strong></td>
                                                            <td className="no-line text-end">
                                                                <h4 className="m-0">$685.99</h4></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                            <div className="d-print-none">
                                                <div className="float-end">
                                                    <Link to="#" onClick={printInvoice} className="btn btn-success waves-effect waves-light"><i className="fa fa-print"></i></Link>{" "}
                                                    <Link to="#" className="btn btn-primary waves-effect waves-light">Send</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default connect(null, { setBreadcrumbItems })(PagesInvoice);