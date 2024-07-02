import React, { useEffect } from "react"
import MetaTags from 'react-meta-tags';

import {
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  CardImg,
  CardText,
  CardHeader,
  CardImgOverlay,
  CardFooter,
  CardDeck,
} from "reactstrap"

// import images
import img1 from "../../assets/images/small/img-1.jpg"
import img2 from "../../assets/images/small/img-2.jpg"
import img3 from "../../assets/images/small/img-3.jpg"
import img4 from "../../assets/images/small/img-4.jpg"
import img5 from "../../assets/images/small/img-5.jpg"
import img6 from "../../assets/images/small/img-6.jpg"
import img7 from "../../assets/images/small/img-7.jpg"
import { Link } from "react-router-dom"

import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

const UiCards = props => {
  const breadcrumbItems = [
    { title: "Lexa", link: "#" },
    { title: "UI Elements", link: "#" },
    { title: "Cards", link: "#" },
  ]

  useEffect(() => {
    props.setBreadcrumbItems('Cards', breadcrumbItems)
  })

  return (
    <React.Fragment>

      <MetaTags>
        <title>Cards | Lexa - Responsive Bootstrap 5 Admin Dashboard</title>
      </MetaTags>


      <Row>
        <Col mg={6} lg={6} xl={3}>
          <Card>
            <CardImg top className="img-fluid" src={img1} alt="Lexa" />
            <CardBody>
              <CardTitle className="h4">Card title</CardTitle>
              <CardText>
                Some quick example text to build on the card title and make
                up the bulk of the card's content.
                  </CardText>
              <Link
                to="#"
                className="btn btn-primary waves-effect waves-light"
              >
                Button
                  </Link>
            </CardBody>
          </Card>
        </Col>
        <Col mg={6} lg={6} xl={3}>
          <Card>
            <CardImg top className="img-fluid" src={img2} alt="Lexa" />
            <CardBody>
              <CardTitle className="h4">Card title</CardTitle>
              <CardText>
                Some quick example text to build on the card title and make
                up the bulk of the card's content.
                  </CardText>
            </CardBody>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Cras justo odio</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
            </ul>
            <CardBody>
              <Link to="#" className="card-link">
                Card link
                  </Link>{" "}
              <Link to="#" className="card-link">
                Another link
                  </Link>
            </CardBody>
          </Card>
        </Col>

        <Col mg={6} lg={6} xl={3}>
          <Card>
            <CardImg top className="img-fluid" src={img3} alt="Lexa" />
            <CardBody>
              <CardText>
                Some quick example text to build on the card title and make
                up the bulk of the card's content.
                  </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md={6} xl={3}>
          <Card>
            <CardBody>
              <CardTitle className="h4">Card title</CardTitle>
              <h6 className="card-subtitle font-14 text-muted">
                Support card subtitle
                  </h6>
            </CardBody>
            <CardImg className="img-fluid" src={img4} alt="Lexa" />
            <CardBody>
              <CardText>
                Some quick example text to build on the card title and make
                up the bulk of the card's content.
                  </CardText>
              <Link to="#" className="card-link">
                Card link
                  </Link>{" "}
              <Link to="#" className="card-link">
                Another link
                  </Link>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Card body>
            <CardTitle className="h4">Special title treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
                </CardText>
            <Link
              to="#"
              className="btn btn-primary waves-effect waves-light"
            >
              Go somewhere
                </Link>
          </Card>
        </Col>
        <Col md={6}>
          <Card body>
            <CardTitle className="h4">Special title treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
                </CardText>
            <Link
              to="#"
              className="btn btn-primary waves-effect waves-light"
            >
              Go somewhere
                </Link>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg={4}>
          <Card body>
            <CardTitle className="h4">Special title treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
                </CardText>
            <Link
              to="#"
              className="btn btn-primary waves-effect waves-light"
            >
              Go somewhere
                </Link>
          </Card>
        </Col>

        <Col lg={4}>
          <Card body className="text-center">
            <CardTitle className="h4">Special title treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
                </CardText>
            <Link
              to="#"
              className="btn btn-primary waves-effect waves-light"
            >
              Go somewhere
                </Link>
          </Card>
        </Col>

        <Col lg={4}>
          <Card body className="text-end">
            <CardTitle className="h4">Special title treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
                </CardText>
            <Link
              to="#"
              className="btn btn-primary waves-effect waves-light"
            >
              Go somewhere
                </Link>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg={4}>
          <Card>
            <CardHeader className="card-header h4 font-16 mt-0">Featured</CardHeader>
            <CardBody>
              <CardTitle className="h4">
                Special title treatment
                  </CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to
                additional content.
                  </CardText>
              <Link to="#" className="btn btn-primary">
                Go somewhere
                  </Link>
            </CardBody>
          </Card>
        </Col>

        <Col lg={4}>
          <Card>
            <CardHeader>Quote</CardHeader>
            <CardBody>
              <blockquote className="card-blockquote mb-0">
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                    </CardText>
                <footer className="blockquote-footer font-12 mt-0 mb-0">{" "}
                      Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </CardBody>
          </Card>
        </Col>

        <Col lg={4}>
          <Card>
            <CardHeader>Featured</CardHeader>
            <CardBody>
              <CardTitle className="h4">
                Special title treatment
                  </CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to
                additional content.
                  </CardText>
              <Link
                to="#"
                className="btn btn-primary waves-effect waves-light"
              >
                Go somewhere
                  </Link>
            </CardBody>
            <CardFooter className="text-muted">2 days ago</CardFooter>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg={4}>
          <Card>
            <CardImg top className="img-fluid" src={img5} alt="Lexa" />
            <CardBody>
              <CardTitle className="h4">Card title</CardTitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
                  </CardText>
              <CardText>
                <small className="text-muted">
                  Last updated 3 mins ago
                    </small>
              </CardText>
            </CardBody>
          </Card>
        </Col>

        <Col lg={4}>
          <Card>
            <CardBody>
              <CardTitle className="h4">Card title</CardTitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
                  </CardText>
              <CardText>
                <small className="text-muted">
                  Last updated 3 mins ago
                    </small>
              </CardText>
            </CardBody>
            <CardImg bottom className="img-fluid" src={img7} alt="Lexa" />
          </Card>
        </Col>

        <Col lg={4}>
          <Card>
            <CardImg className="img-fluid" src={img6} alt="Lexa" />
            <CardImgOverlay>
              <CardTitle className="h4 text-white font-16 mt-0">Card title</CardTitle>
              <CardText className="text-light">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
                  </CardText>
              <CardText>
                <small className="text-white">
                  Last updated 3 mins ago
                    </small>
              </CardText>
            </CardImgOverlay>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg="4">
          <Card className="text-white bg-dark">
            <CardBody>
              <blockquote className="card-blockquote mb-0">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer className="blockquote-footer text-white font-12 mt-0 mb-0">
                  Someone famous in <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </CardBody>
          </Card>
        </Col>

        <Col lg="4">
          <Card className="text-white bg-primary">
            <CardBody>
              <blockquote className="card-blockquote mb-0">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer className="blockquote-footer text-white font-12 mt-0 mb-0">
                  Someone famous in <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </CardBody>
          </Card>
        </Col>

        <Col lg="4">
          <Card className="text-white bg-success">
            <CardBody>
              <blockquote className="card-blockquote mb-0">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer className="blockquote-footer text-white font-12 mt-0 mb-0">
                  Someone famous in <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </CardBody>
          </Card>
        </Col>
      </Row>


      <Row>
        <Col lg="4">
          <Card className="text-white bg-info">
            <CardBody>
              <blockquote className="card-blockquote mb-0">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer className="blockquote-footer text-white font-12 mt-0 mb-0">
                  Someone famous in <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </CardBody>
          </Card>
        </Col>

        <Col lg="4">
          <Card className="text-white bg-warning">
            <CardBody>
              <blockquote className="card-blockquote mb-0">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer className="blockquote-footer text-white font-12 mt-0 mb-0">
                  Someone famous in <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </CardBody>
          </Card>
        </Col>

        <Col lg="4">
          <Card className="text-white bg-danger">
            <CardBody>
              <blockquote className="card-blockquote mb-0">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer className="blockquote-footer text-white font-12 mt-0 mb-0">
                  Someone famous in <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col className="col-12">
          <h4 className="my-3">Card groups</h4>
          <CardDeck className="card-deck-wrapper">
            <div className="card-group">
              <Card className="mb-4">
                <CardImg top className="img-fluid" src={img4} alt="Lexa" />
                <CardBody>
                  <CardTitle className="h4">Card title</CardTitle>
                  <CardText>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                    </CardText>
                  <CardText>
                    <small className="text-muted">
                      Last updated 3 mins ago
                      </small>
                  </CardText>
                </CardBody>
              </Card>
              <Card className="mb-4">
                <CardImg top className="img-fluid" src={img5} alt="Lexa" />
                <CardBody>
                  <CardTitle className="h4">Card title</CardTitle>
                  <CardText>
                    This card has supporting text below as a natural lead-in
                    to additional content.
                    </CardText>
                  <CardText>
                    <small className="text-muted">
                      Last updated 3 mins ago
                      </small>
                  </CardText>
                </CardBody>
              </Card>
              <Card className="mb-4">
                <CardImg top className="img-fluid" src={img6} alt="Lexa" />
                <CardBody>
                  <CardTitle className="h4">Card title</CardTitle>
                  <CardText>
                    This is a wider card with supporting text below as a
                    natural lead-in to additional content. This card has even
                    longer content than the first to show that equal height
                    action.
                    </CardText>
                  <CardText>
                    <small className="text-muted">
                      Last updated 3 mins ago
                      </small>
                  </CardText>
                </CardBody>
              </Card>
            </div>
          </CardDeck>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default connect(null, { setBreadcrumbItems })(UiCards);