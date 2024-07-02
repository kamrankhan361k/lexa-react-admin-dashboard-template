import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import logodark from "../../assets/images/logo-dark.png";
import user from "../../assets/images/users/user-6.jpg";
import MetaTags from 'react-meta-tags';

// import images
import logoLightPng from "../../assets/images/logo-light.png"
import logoDark from "../../assets/images/logo-dark.png"

class LockScreen extends Component {

    render() {
        return (
            <React.Fragment>
                <MetaTags>
                    <title>Loak Screen | Lexa - Responsive Bootstrap 5 Admin Dashboard</title>
                </MetaTags>
                <div className="account-pages my-5 pt-sm-5">
                    <Container>
                        <Row className="justify-content-center">
                            <Col md="8" lg="6" xl="5">
                                <Card className="overflow-hidden">
                                    <CardBody className="pt-0">
                                        <h3 className="text-center mt-5 mb-4">
                                            <Link to="/" className="d-block auth-logo">
                                                <img src={logoDark} alt="" height="30" className="auth-logo-dark" />
                                                <img src={logoLightPng} alt="" height="30" className="auth-logo-light" />
                                            </Link>
                                        </h3>
                                        <div className="p-3">
                                            <h4 className="text-muted font-size-18 mb-1 text-center">Locked</h4>
                                            <p className="text-muted text-center">Hello Smith, enter your password to unlock the screen!</p>
                                            <AvForm className="form-horizontal mt-4">

                                                <div className="user-thumb text-center mb-4">
                                                    <img src={user} className="rounded-circle avatar-md img-thumbnail" alt="thumbnail" />
                                                    <h6 className="font-size-16 mt-3">Robert Smith</h6>
                                                </div>

                                                <div className="mb-3">
                                                    <label htmlFor="userpassword">Password</label>
                                                    <AvField name="password" className="form-control" type="password" placeholder="Enter password" />
                                                </div>

                                                <div className="mb-3 row">
                                                    <div className="col-12 text-end">
                                                        <Button color="primary" className="w-md waves-effect waves-light" type="submit">Unlock</Button>
                                                    </div>
                                                </div>
                                            </AvForm>
                                        </div>
                                    </CardBody>
                                </Card>
                                <div className="mt-5 text-center">
                                    <p>Not you ? return <Link to="/pages-login" className=" text-primary"> Sign In </Link> </p>
                                    <p>© 2021 Lexa. Crafted with <i className="mdi mdi-heart text-danger"></i> by Themesbrand</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}


export default LockScreen;