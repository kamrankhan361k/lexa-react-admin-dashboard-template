import React , {useEffect} from "react"
import MetaTags from 'react-meta-tags';
import { Link } from "react-router-dom"
import { Row, Col, Card, CardBody, Media } from "reactstrap"

import { connect } from "react-redux";

//Import Image
import avatar1 from "../../assets/images/users/user-1.jpg"
import img3 from "../../assets/images/small/img-3.jpg"
import img4 from "../../assets/images/small/img-4.jpg"

import { setBreadcrumbItems } from '../../store/actions';

//Import Email Sidebar
import EmailSideBar from "./email-sidebar"

//Import Email Topbar
import EmailToolbar from "./email-toolbar"

const EmailRead = (props) => {

  const breadcrumbItems = [
    { title: "Lexa", link: "#" },
    { title: "Email", link: "#" },
    { title: "Email Read", link: "#" },
  ]

  useEffect(() => {
    props.setBreadcrumbItems('Email Read', breadcrumbItems)
  })

  return (
    <React.Fragment>

      <MetaTags>
        <title>Email Read | Lexa - Responsive Bootstrap 5 Admin Dashboard</title>
      </MetaTags>

      <Row>
        <Col xs="12">
          {/* Render Email SideBar */}
          <EmailSideBar />

          <div className="email-rightbar mb-3">
            <Card>
              {/* Render Email Top Tool Bar */}
              <EmailToolbar />

              <CardBody>
                <Media className="mb-4">
                  <img
                    className="d-flex me-3 rounded-circle avatar-sm"
                    src={avatar1}
                    alt="lexa"
                  />
                  <Media body className="align-self-center">
                    <h4 className="font-size-14 m-0">
                      Humberto D. Champion
                        </h4>
                    <small className="text-muted">support@domain.com</small>
                  </Media>
                </Media>

                <h4 className="mt-0 font-size-16">
                  This Week's Top Stories
                    </h4>

                <p>Dear Lorem Ipsum,</p>
                <p>
                  Praesent dui ex, dapibus eget mauris ut, finibus
                  vestibulum enim. Quisque arcu leo, facilisis in fringilla
                  id, luctus in tortor. Nunc vestibulum est quis orci varius
                  viverra. Curabitur dictum volutpat massa vulputate
                  molestie. In at felis ac velit maximus convallis.
                    </p>
                <p>
                  Sed elementum turpis eu lorem interdum, sed porttitor eros
                  commodo. Nam eu venenatis tortor, id lacinia diam. Sed
                  aliquam in dui et porta. Sed bibendum orci non tincidunt
                  ultrices. Vivamus fringilla, mi lacinia dapibus
                  condimentum, ipsum urna lacinia lacus, vel tincidunt mi
                  nibh sit amet lorem.
                    </p>
                <p>Sincerly,</p>
                <hr />

                <Row>
                  <Col xl="2" xs="6">
                    <Card>
                      <img
                        className="card-img-top img-fluid"
                        src={img3}
                        alt="lexa"
                      />
                      <div className="my-2 text-center">
                        <Link to="#" className="text-muted font-weight-normal">
                          Download
                            </Link>
                      </div>
                    </Card>
                  </Col>
                  <Col xl="2" xs="6">
                    <Card>
                      <img
                        className="card-img-top img-fluid"
                        src={img4}
                        alt="lexa"
                      />
                      <div className="my-2 text-center">
                        <Link to="#" className="text-muted font-weight-normal">
                          Download
                            </Link>
                      </div>
                    </Card>
                  </Col>
                </Row>

                <Link
                  to="#"
                  className="btn btn-secondary waves-effect mt-5"
                >
                  <i className="mdi mdi-reply"></i> Reply
                    </Link>

              </CardBody>
            </Card>
          </div>
        </Col>
      </Row>

    </React.Fragment>
  )
}

export default connect(null, { setBreadcrumbItems })(EmailRead);