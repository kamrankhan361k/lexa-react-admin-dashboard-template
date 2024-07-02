import React, {  useEffect, useState } from "react"
import MetaTags from 'react-meta-tags';

import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Modal,
} from "reactstrap"

import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

const UiModal = (props) => {
  const breadcrumbItems = [
    { title: "Lexa", link: "#" },
    { title: "UI Elements", link: "#" },
    { title: "Modals", link: "#" },
  ]

  useEffect(() => {
    props.setBreadcrumbItems('Modals', breadcrumbItems)
  })


  const [modal_standard, setmodal_standard] = useState(false)
  const [modal_large, setmodal_large] = useState(false)
  const [modal_small, setmodal_small] = useState(false)
  const [modal_center, setmodal_center] = useState(false)

  function tog_standard() {
    setmodal_standard(!modal_standard)
    removeBodyCss()
  }

  function removeBodyCss() {
    document.body.classList.add("no_padding")
  }

  function tog_large() {
    setmodal_large(!modal_large)
    removeBodyCss()
  }

  function tog_small() {
    setmodal_small(!modal_small)
    removeBodyCss()
  }

  function tog_center() {
    setmodal_center(!modal_center)
    removeBodyCss()
  }

  return (
    <React.Fragment>

      <MetaTags>
        <title>Modals | Lexa - Responsive Bootstrap 5 Admin Dashboard</title>
      </MetaTags>

      <Row>
        <Col className="col-12">
          <Card>
            <CardBody>
              <CardTitle className="h4">Modals Examples</CardTitle>
              <p className="card-title-desc">
                Modals are streamlined, but flexible dialog prompts
                powered by JavaScript. They support a number of use cases
                from user notification to completely custom content and
                feature a handful of helpful subcomponents, sizes, and
                more.
                    </p>

              <div
                className="modal bs-example-modal"
                tabIndex="-1"
                role="dialog"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title mt-0">Modal title</h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                      </button>
                    </div>
                    <div className="modal-body">
                      <p>One fine body&hellip;</p>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-primary">
                        Save changes
                            </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                            </button>
                    </div>
                  </div>
                </div>
              </div>

              <Row>
                <Col sm={6} md={3} className="mt-4">
                  <div className=" text-center">
                    <p className="text-muted">Standard Modal</p>
                    <button
                      type="button"
                      onClick={() => {
                        tog_standard()
                      }}
                      className="btn btn-primary waves-effect waves-light"
                      data-toggle="modal"
                      data-target="#myModal"
                    >
                      Standard Modal
                        </button>
                    <Modal
                      isOpen={modal_standard}
                      toggle={() => {
                        tog_standard()
                      }}
                    >
                      <div className="modal-header">
                        <h5 className="modal-title mt-0" id="myModalLabel">
                          Modal Heading
                            </h5>
                        <button
                          type="button"
                          onClick={() => {
                            setmodal_standard(false)
                          }}
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <h5>Overflowing text to show scroll behavior</h5>
                        <p>
                          Cras mattis consectetur purus sit amet fermentum.
                          Cras justo odio, dapibus ac facilisis in, egestas
                          eget quam. Morbi leo risus, porta ac consectetur
                          ac, vestibulum at eros.
                            </p>
                        <p>
                          Praesent commodo cursus magna, vel scelerisque
                          nisl consectetur et. Vivamus sagittis lacus vel
                          augue laoreet rutrum faucibus dolor auctor.
                            </p>
                        <p>
                          Aenean lacinia bibendum nulla sed consectetur.
                          Praesent commodo cursus magna, vel scelerisque
                          nisl consectetur et. Donec sed odio dui. Donec
                          ullamcorper nulla non metus auctor fringilla.
                            </p>
                        <p>
                          Cras mattis consectetur purus sit amet fermentum.
                          Cras justo odio, dapibus ac facilisis in, egestas
                          eget quam. Morbi leo risus, porta ac consectetur
                          ac, vestibulum at eros.
                            </p>
                        <p>
                          Praesent commodo cursus magna, vel scelerisque
                          nisl consectetur et. Vivamus sagittis lacus vel
                          augue laoreet rutrum faucibus dolor auctor.
                            </p>
                        <p>
                          Aenean lacinia bibendum nulla sed consectetur.
                          Praesent commodo cursus magna, vel scelerisque
                          nisl consectetur et. Donec sed odio dui. Donec
                          ullamcorper nulla non metus auctor fringilla.
                            </p>
                        <p>
                          Cras mattis consectetur purus sit amet fermentum.
                          Cras justo odio, dapibus ac facilisis in, egestas
                          eget quam. Morbi leo risus, porta ac consectetur
                          ac, vestibulum at eros.
                            </p>
                        <p>
                          Praesent commodo cursus magna, vel scelerisque
                          nisl consectetur et. Vivamus sagittis lacus vel
                          augue laoreet rutrum faucibus dolor auctor.
                            </p>
                        <p>
                          Aenean lacinia bibendum nulla sed consectetur.
                          Praesent commodo cursus magna, vel scelerisque
                          nisl consectetur et. Donec sed odio dui. Donec
                          ullamcorper nulla non metus auctor fringilla.
                            </p>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          onClick={() => {
                            tog_standard()
                          }}
                          className="btn btn-secondary waves-effect"
                          data-dismiss="modal"
                        >
                          Close
                            </button>
                        <button
                          type="button"
                          className="btn btn-primary waves-effect waves-light"
                        >
                          Save changes
                            </button>
                      </div>
                    </Modal>
                  </div>
                </Col>
                <Col sm={6} md={3} className="mt-4">
                  <div className="text-center">
                    <p className="text-muted">Large modal</p>
                    <button
                      type="button"
                      className="btn btn-primary waves-effect waves-light"
                      onClick={() => {
                        tog_large()
                      }}
                      data-toggle="modal"
                      data-target=".bs-example-modal-lg"
                    >
                      Large modal
                        </button>
                  </div>

                  <Modal
                    size="lg"
                    isOpen={modal_large}
                    toggle={() => {
                      tog_large()
                    }}
                  >
                    <div className="modal-header">
                      <h5
                        className="modal-title mt-0"
                        id="myLargeModalLabel"
                      >
                        Large Modal
                            </h5>
                      <button
                        onClick={() => {
                          setmodal_large(false)
                        }}
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <p>Cras mattis consectetur purus sit amet fermentum.
                      Cras justo odio, dapibus ac facilisis in,
                      egestas eget quam. Morbi leo risus, porta ac
                                                                consectetur ac, vestibulum at eros.</p>
                      <p>Praesent commodo cursus magna, vel scelerisque
                      nisl consectetur et. Vivamus sagittis lacus vel
                                                                augue laoreet rutrum faucibus dolor auctor.</p>
                      <p className="mb-0">Aenean lacinia bibendum nulla sed consectetur.
                      Praesent commodo cursus magna, vel scelerisque
                      nisl consectetur et. Donec sed odio dui. Donec
                      ullamcorper nulla non metus auctor
                                                                fringilla.</p>
                    </div>
                  </Modal>
                </Col>
                <Col sm={6} md={3} className="mt-4">
                  <div className="text-center">
                    <p className="text-muted">Small modal</p>
                    <button
                      type="button"
                      onClick={() => {
                        tog_small()
                      }}
                      className="btn btn-primary waves-effect waves-light"
                      data-toggle="modal"
                      data-target=".bs-example-modal-sm"
                    >
                      Small modal
                      </button>
                    <Modal
                      size="sm"
                      isOpen={modal_small}
                      toggle={() => {
                        tog_small()
                      }}
                    >
                      <div className="modal-header">
                        <h5
                          className="modal-title mt-0"
                          id="mySmallModalLabel"
                        >
                          Small Modal
                            </h5>
                        <button
                          onClick={() => {
                            setmodal_small(false)
                          }}
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <p>
                          Cras mattis consectetur purus sit amet fermentum.
                          Cras justo odio, dapibus ac facilisis in, egestas
                          eget quam. Morbi leo risus, porta ac consectetur
                          ac, vestibulum at eros.
                            </p>
                        <p>
                          Praesent commodo cursus magna, vel scelerisque
                          nisl consectetur et. Vivamus sagittis lacus vel
                          augue laoreet rutrum faucibus dolor auctor.
                            </p>
                        <p className="mb-0">
                          Aenean lacinia bibendum nulla sed consectetur.
                          Praesent commodo cursus magna, vel scelerisque
                          nisl consectetur et. Donec sed odio dui. Donec
                          ullamcorper nulla non metus auctor fringilla.
                            </p>
                      </div>
                    </Modal>
                  </div>
                </Col>
                <Col sm={6} md={3} className="mt-4">
                  <div className="text-center">
                    <p className="text-muted">Center modal</p>
                    <button
                      type="button"
                      className="btn btn-primary waves-effect waves-light"
                      onClick={() => {
                        tog_center()
                      }}
                      data-toggle="modal"
                      data-target=".bs-example-modal-center"
                    >
                      Center modal
                </button>
                  </div>

                  <Modal
                    isOpen={modal_center}
                    toggle={() => {
                      tog_center()
                    }}
                    centered={true}
                  >
                    <div className="modal-header">
                      <h5 className="modal-title mt-0">Center Modal</h5>
                      <button
                        type="button"
                        onClick={() => {
                          setmodal_center(false)
                        }}
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <p>
                        Cras mattis consectetur purus sit amet fermentum.
                        Cras justo odio, dapibus ac facilisis in, egestas
                        eget quam. Morbi leo risus, porta ac consectetur
                        ac, vestibulum at eros.
                            </p>
                      <p>
                        Praesent commodo cursus magna, vel scelerisque
                        nisl consectetur et. Vivamus sagittis lacus vel
                        augue laoreet rutrum faucibus dolor auctor.
                            </p>
                      <p className="mb-0">
                        Aenean lacinia bibendum nulla sed consectetur.
                        Praesent commodo cursus magna, vel scelerisque
                        nisl consectetur et. Donec sed odio dui. Donec
                        ullamcorper nulla non metus auctor fringilla.
                            </p>
                    </div>
                  </Modal>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>

    </React.Fragment>
  )
}

export default connect(null, { setBreadcrumbItems })(UiModal);