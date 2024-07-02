import React from "react"
import { Row, Col } from "reactstrap"
import { connect } from 'react-redux';
import {Link} from "react-router-dom"
import {
  Sparklines,
  SparklinesBars,
} from "react-sparklines"

const Breadcrumb = props => {

const itemLength = (props.breadcrumbItems || []).length || 1;

  return (
    <Row>
      <Col sm={6}>
        <div className="page-title-box">

          <h4>{props.title}</h4>
          <ol className="breadcrumb m-0">
            {
              (props.breadcrumbItems || []).map((item, key) =>
                (key + 1) === itemLength ?
                  <li key={key} className="breadcrumb-item active">{item.title}</li>
                  : <li key={key} className="breadcrumb-item"><Link to="#">{item.title}</Link></li>
              )
            }
          </ol>
        </div>
      </Col>

      <Col sm={6}>
        <div className="state-information d-none d-sm-block">
          <div className="state-graph">
            <Sparklines
              data={[8, 6, 4, 7, 10, 12, 7, 4, 9, 12, 13, 11, 12]}
              margin={3}
              svgWidth={101}
              svgHeight={32}
            >
              <SparklinesBars
                margin={3}
                style={{
                  strokeWidth: 5,
                  stroke: "#7A6FBE",
                  fill: "#7A6FBE"
                }}
              />
            </Sparklines>
            <div className="info">Balance $ 2,317</div>
          </div>
          <div className="state-graph">
            <Sparklines
              data={[8, 6, 4, 7, 10, 12, 7, 4, 9, 12, 13, 11, 12]}
              margin={3}
              svgWidth={101}
              svgHeight={32}
            >
              <SparklinesBars
                margin={3}
                style={{
                  strokeWidth: 5,
                  stroke: "#29bbe3",
                  fill: "#29bbe3"
                }}
              />
            </Sparklines>
            <div className="info">Item Sold 1230</div>
          </div>
        </div>
      </Col>
    </Row>
  )
}

const mapStatetoProps = state => {
  const Layout = state.Layout;
  const BreadcrumbData = state.Breadcrumb
  return { layoutType: Layout.layoutType, title: BreadcrumbData.title, breadcrumbItems: BreadcrumbData.breadcrumbItems };
};

export default connect(mapStatetoProps, {})(Breadcrumb);
