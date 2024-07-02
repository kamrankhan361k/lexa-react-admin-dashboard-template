import React from "react"
import { Row, Col, CardBody, Card, Container } from "reactstrap"

import { Link } from "react-router-dom"
import MetaTags from 'react-meta-tags';

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation"

// import images
import logoLightPng from "../../assets/images/logo-light.png"
import logoDark from "../../assets/images/logo-dark.png"

const Recoverpw = (props) => {


  return (
    <React.Fragment>
      <MetaTags>
        <title>Recover Password | Lexa - Responsive Bootstrap 5 Admin Dashboard</title>
      </MetaTags>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card className="overflow-hidden">
                <CardBody className="pt-0">
                  <h3 className="text-center mt-5 mb-4">
                    <Link to="/" className="d-block auth-logo">
                      <img src={logoDark} alt="" height="30" className="auth-logo-dark" />
                      <img src={logoLightPng} alt="" height="30" className="auth-logo-light" />
                    </Link>
                  </h3>
                  <div className="p-3">
                    <h4 className="text-muted font-size-18 mb-3 text-center">Recover Password</h4>
                    <div className="alert alert-info" role="alert">
                      Enter your Email and instructions will be sent to you!
                    </div>
                    {props.forgetError && props.forgetError ? (
                      <Alert color="danger" style={{ marginTop: "13px" }}>
                        {props.forgetError}
                      </Alert>
                    ) : null}
                    {props.forgetSuccessMsg ? (
                      <Alert color="success" style={{ marginTop: "13px" }}>
                        {props.forgetSuccessMsg}
                      </Alert>
                    ) : null}

                    <AvForm
                      className="form-horizontal mt-4"
                    >
                      <div className="mb-3">
                        <AvField
                          name="email"
                          label="Email"
                          className="form-control"
                          placeholder="Enter email"
                          type="email"
                          required
                        />
                      </div>
                      <Row className="mb-3">
                        <Col className="text-end">
                          <button
                            className="btn btn-primary w-md waves-effect waves-light"
                            type="submit"
                          >
                            Reset
                          </button>
                        </Col>
                      </Row>
                    </AvForm>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>
                  Remember It ?{" "}
                  <Link to="login" className="text-primary">
                    Sign In Here
                  </Link>{" "}
                </p>
                <p>
                  © {new Date().getFullYear()} Lexa <span className="d-none d-sm-inline-block"> - Crafted with <i className="mdi mdi-heart text-danger"></i> by Themesbrand.</span>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Recoverpw
