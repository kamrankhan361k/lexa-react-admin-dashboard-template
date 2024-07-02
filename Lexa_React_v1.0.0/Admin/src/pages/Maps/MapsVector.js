import React, { useEffect } from "react"
import MetaTags from 'react-meta-tags';

import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap"
import Vector from "./Vectormap"

import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

const MapsVector = (props) => {
  const breadcrumbItems = [
    { title: "Lexa", link: "#" },
    { title: "Maps", link: "#" },
    { title: "Vector Maps", link: "#" },
  ]

  useEffect(() => {
    props.setBreadcrumbItems('Vector Maps', breadcrumbItems)
  })

  return (
    <React.Fragment>

      <MetaTags>
        <title>Vector Maps | Lexa - Responsive Bootstrap 5 Admin Dashboard</title>
      </MetaTags>


      <Row>
        <Col lg={6}>
          <Card>
            <CardBody>
              <CardTitle>World Map</CardTitle>
              <CardSubtitle className="mb-3">
                Example of vector map.
                  </CardSubtitle>

              <div id="world-map-markers" className="vector-map-height">
                <Vector
                  value="world_mill"
                  width="500"
                  color="rgb(98, 110, 212)"
                />
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <CardBody>
              <CardTitle>USA Map</CardTitle>
              <CardSubtitle className="mb-3">
                Example of vector map.
                  </CardSubtitle>

              <div id="usa" className="vector-map-height">
                <Vector
                  value="us_aea"
                  width="500"
                  color="rgb(98, 110, 212)"
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
              <CardTitle>Canada Map</CardTitle>
              <CardSubtitle className="mb-3">
                Example of vector map.
                  </CardSubtitle>

              <div id="uk" className="vector-map-height">
                <Vector
                  value="ca_lcc"
                  width="500"
                  color="rgb(98, 110, 212)"
                />
              </div>
            </CardBody>
          </Card>
        </Col>

        <Col lg={6}>
          <Card>
            <CardBody>
              <CardTitle>Asia Vector Map</CardTitle>
              <CardSubtitle className="mb-3">
                Example of vector map.
                  </CardSubtitle>

              <div id="chicago" className="vector-map-height">
                <Vector
                  value="asia_mill"
                  width="500"
                  color="rgb(98, 110, 212)"
                />
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>

    </React.Fragment>
  )
}

export default connect(null, { setBreadcrumbItems })(MapsVector);