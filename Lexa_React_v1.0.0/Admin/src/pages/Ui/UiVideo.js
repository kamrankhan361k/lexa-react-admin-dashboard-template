import React, { useEffect } from "react"
import MetaTags from 'react-meta-tags';

import { Card, CardBody, CardTitle, Col, Row } from "reactstrap"

import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

const UiVideo = (props) => {
  const breadcrumbItems = [
    { title: "Lexa", link: "#" },
    { title: "UI Elements", link: "#" },
    { title: "Video", link: "#" },
  ]

  useEffect(() => {
    props.setBreadcrumbItems('Video', breadcrumbItems)
  })

  return (
    <React.Fragment>
        <MetaTags>
          <title>Video | Lexa - Responsive Bootstrap 5 Admin Dashboard</title>
        </MetaTags>
        
          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Responsive embed video 16:9</CardTitle>
                  <p className="card-title-desc">
                    Aspect ratios can be customized with modifier className.
                  </p>

                  <div className="embed-responsive embed-responsive-16by9 ratio ratio-16x9">
                    <iframe
                      title="test"
                      className="embed-responsive-item"
                      src="https://www.youtube.com/embed/1y_kfWUCFDQ"
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Responsive embed video 21:9</CardTitle>
                  <p className="card-title-desc">
                    Aspect ratios can be customized with modifier className.
                  </p>

                  <div className="embed-responsive embed-responsive-21by9 ratio ratio-21x9">
                    <iframe
                      title="test1"
                      className="embed-responsive-item"
                      src="https://www.youtube.com/embed/1y_kfWUCFDQ"
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Responsive embed video 4:3</CardTitle>
                  <p className="card-title-desc">
                    Aspect ratios can be customized with modifier className.
                  </p>

                  <div className="embed-responsive embed-responsive-4by3 ratio ratio ratio-4x3">
                    <iframe
                      title="tes2"
                      className="embed-responsive-item"
                      src="https://www.youtube.com/embed/1y_kfWUCFDQ"
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Responsive embed video 1:1</CardTitle>
                  <p className="card-title-desc">
                    Aspect ratios can be customized with modifier className.
                  </p>

                  <div className="embed-responsive embed-responsive-1by1 ratio ratio-1x1">
                    <iframe
                      title="test3"
                      className="embed-responsive-item"
                      src="https://www.youtube.com/embed/1y_kfWUCFDQ"
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
       
    </React.Fragment>
  )
}

export default connect(null, { setBreadcrumbItems })(UiVideo);