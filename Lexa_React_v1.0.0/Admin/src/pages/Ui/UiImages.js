import React, { useEffect } from "react"
import MetaTags from 'react-meta-tags';

import img2 from "../../assets/images/small/img-2.jpg"
import img3 from "../../assets/images/small/img-3.jpg"
import img4 from "../../assets/images/small/img-4.jpg"
import { Link } from "react-router-dom"

import {
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  CardImg,
  CardText,
} from "reactstrap"
import avatar1 from "../../assets/images/users/user-1.jpg"
import avatar2 from "../../assets/images/users/user-2.jpg"
import avatar3 from "../../assets/images/users/user-3.jpg"
import avatar4 from "../../assets/images/users/user-4.jpg"
import avatar5 from "../../assets/images/users/user-5.jpg"
import avatar6 from "../../assets/images/users/user-6.jpg"

import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

const UiImages = (props) => {
  const breadcrumbItems = [
    { title: "Lexa", link: "#" },
    { title: "UI Elements", link: "#" },
    { title: "Images", link: "#" },
  ]

  useEffect(() => {
    props.setBreadcrumbItems('Images', breadcrumbItems)
  })

  return (
    <React.Fragment>

      <MetaTags>
        <title>Images | Lexa - Responsive Bootstrap 5 Admin Dashboard</title>
      </MetaTags>

      <Row>
        <Col lg={6}>
          <Card>
            <CardBody>
              <CardTitle className="h4">Image thumbnails</CardTitle>
              <p className="card-title-desc">
                In addition to our border-radius utilities, you can use{" "}
                <code className="highlighter-rouge">.img-thumbnail</code> to
                    give an image a rounded 1px border appearance.
                 </p>
              <div className="">
                <img
                  className="img-thumbnail"
                  alt="Lexa"
                  width="200"
                  src={img3}
                />
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle className="h4">Image Rounded & Circle</CardTitle>
              <p className="card-title-desc">
                Use className <code>.rounded</code> and{" "}
                <code>.rounded-circle</code>.
                 </p>
              <div className="">
                <img
                  className="rounded me-4"
                  alt="Lexa"
                  width="200"
                  src={img4}
                />{" "}
                <img
                  className="rounded-circle mt-4 mt-sm-0"
                  alt="Lexa"
                  src={avatar4}
                />
              </div>
            </CardBody>
          </Card>
        </Col>

        <Col lg={6}>
          <Card>
            <CardBody>
              <CardTitle className="h4">Lexas</CardTitle>
              <p className="card-title-desc">
                Images in Bootstrap are made responsive with{" "}
                <code className="highlighter-rouge">.img-fluid</code>.{" "}
                <code className="highlighter-rouge">max-width: 100%;</code>{" "}
                    and <code className="highlighter-rouge">height: auto;</code>{" "}
                    are applied to the image so that it scales with the parent
                    element.
                 </p>
              <CardImg className="img-fluid" src={img2} alt="Lexa" />
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg={12}>
          <Card>
            <CardBody>
              <CardTitle className="h4 mb-4">Image Sizes</CardTitle>
              <Row>
                <Col md={6}>
                  <Row>
                    <Col lg={4}>
                      <CardImg
                        src={avatar3}
                        alt="LexaLexa"
                        className="rounded avatar-sm"
                      />
                      <CardText className="mt-2 mb-lg-0">
                        <code>.avatar-sm</code>
                      </CardText>
                    </Col>
                    <Col lg={4}>
                      <CardImg
                        src={avatar4}
                        alt="Lexa"
                        className="rounded avatar-md"
                      />
                      <CardText className="mt-2  mb-lg-0">
                        <code>.avatar-md</code>
                      </CardText>
                    </Col>
                    <Col lg={4}>
                      <CardImg
                        src={avatar5}
                        alt="Lexa"
                        className="rounded avatar-lg"
                      />
                      <CardText className="mt-2 mb-lg-0">
                        <code>.avatar-lg</code>
                      </CardText>
                    </Col>
                  </Row>
                </Col>
                <Col md={6}>
                  <Row>
                    <Col lg={4}>
                      <CardImg
                        src={avatar3}
                        alt="Lexa"
                        className="rounded-circle avatar-sm"
                      />
                      <CardText className="mt-2 mb-lg-0">
                        <code>.avatar-sm</code>
                      </CardText>
                    </Col>
                    <Col lg={4}>
                      <CardImg
                        src={avatar4}
                        alt=""
                        className="rounded-circle avatar-md"
                      />
                      <CardText className="mt-2  mb-lg-0">
                        <code>.avatar-md</code>
                      </CardText>
                    </Col>
                    <Col lg={4}>
                      <CardImg
                        src={avatar5}
                        alt="Lexa"
                        className="rounded-circle avatar-lg"
                      />
                      <CardText className="mt-2 mb-lg-0">
                        <code>.avatar-lg</code>
                      </CardText>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col className="col-12">
          <Card>
            <CardBody>
              <CardTitle className="h4">Default media object</CardTitle>
              <p className="card-title-desc">
                The default media displays a media object (images, video,
                audio) to the left or right of a content block.
                 </p>
              <div className="media mb-4">
                <img
                  className="d-flex me-3 rounded-circle"
                  src={avatar6}
                  alt="Lexa"
                  height="64"
                />
                <div className="media-body">
                  <h5 className="mt-0 font-16">Media heading</h5>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis. Fusce
                      condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus.
                    </div>
              </div>

              <div className="media mb-4">
                <img
                  className="d-flex me-3 rounded-circle"
                  src={avatar2}
                  alt="Lexa"
                  height="64"
                />
                <div className="media-body">
                  <h5 className="mt-0 font-16">Media heading</h5>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis. Fusce
                      condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus.
                      <div className="media mt-3">
                    <Link className="d-flex pe-3" to="#">
                      <img
                        src={avatar3}
                        alt="Lexa"
                        height="64"
                        className="rounded-circle"
                      />
                    </Link>
                    <div className="media-body">
                      <h5 className="mt-0 font-16">Media heading</h5>
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel
                          metus scelerisque ante sollicitudin. Cras purus odio,
                          vestibulum in vulputate at, tempus viverra turpis.
                          Fusce condimentum nunc ac nisi vulputate fringilla.
                          Donec lacinia congue felis in faucibus.
                        </div>
                  </div>
                </div>
              </div>

              <div className="media">
                <div className="media-body">
                  <h5 className="mt-0 mb-1 font-16">Media object</h5>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis. Fusce
                      condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus.
                    </div>
                <img
                  className="d-flex me-3 rounded-circle"
                  src={avatar4}
                  alt="Lexa"
                  height="64"
                />
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col className="col-12">
          <Card>
            <CardBody>
              <CardTitle className="h4">Media alignment</CardTitle>
              <p className="card-title-desc">
                The images or other media can be aligned top, middle, or
                bottom. The default is top aligned.
                 </p>

              <div className="media mb-4">
                <img
                  className="d-flex align-self-start rounded me-3"
                  src={avatar3}
                  alt="Lexa"
                  height="64"
                />
                <div className="media-body">
                  <h5 className="mt-0 font-16">Top-aligned media</h5>
                  <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel
                    metus scelerisque ante sollicitudin. Cras purus odio,
                    vestibulum in vulputate at, tempus viverra turpis. Fusce
                    condimentum nunc ac nisi vulputate fringilla. Donec
                    lacinia congue felis in faucibus.
                      </p>
                  <p className="mb-0">
                    Donec sed odio dui. Nullam quis risus eget urna mollis
                    ornare vel eu leo. Cum sociis natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus.
                      </p>
                </div>
              </div>

              <div className="media mb-4">
                <img
                  className="d-flex align-self-center rounded me-3"
                  src={avatar5}
                  alt="Lexa"
                  height="64"
                />
                <div className="media-body">
                  <h5 className="mt-0 font-16">Center-aligned media</h5>
                  <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel
                    metus scelerisque ante sollicitudin. Cras purus odio,
                    vestibulum in vulputate at, tempus viverra turpis. Fusce
                    condimentum nunc ac nisi vulputate fringilla. Donec
                    lacinia congue felis in faucibus.
                      </p>
                  <p className="mb-0">
                    Donec sed odio dui. Nullam quis risus eget urna mollis
                    ornare vel eu leo. Cum sociis natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus.
                      </p>
                </div>
              </div>

              <div className="media">
                <img
                  className="d-flex align-self-end rounded me-3"
                  src={avatar1}
                  alt="Lexa"
                  height="64"
                />
                <div className="media-body">
                  <h5 className="mt-0 font-16">Bottom-aligned media</h5>
                  <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel
                    metus scelerisque ante sollicitudin. Cras purus odio,
                    vestibulum in vulputate at, tempus viverra turpis. Fusce
                    condimentum nunc ac nisi vulputate fringilla. Donec
                    lacinia congue felis in faucibus.
                      </p>
                  <p className="mb-0">
                    Donec sed odio dui. Nullam quis risus eget urna mollis
                    ornare vel eu leo. Cum sociis natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus.
                      </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>

    </React.Fragment>
  )
}

export default connect(null, { setBreadcrumbItems })(UiImages);