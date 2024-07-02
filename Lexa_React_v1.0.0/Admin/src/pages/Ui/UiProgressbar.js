import React,{useEffect} from "react"
import MetaTags from 'react-meta-tags';
import { Card, CardBody, CardTitle, Col, Progress, Row } from "reactstrap"
import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

const UiProgressbar = (props) => {
  const breadcrumbItems = [
    { title: "Lexa", link: "#" },
    { title: "UI Elements", link: "#" },
    { title: "Progress Bars", link: "#" },
  ]

  useEffect(() => {
    props.setBreadcrumbItems('Progress Bars', breadcrumbItems)
  })

  return (
    <React.Fragment>

      <MetaTags>
        <title>Progress Bars | Lexa - Responsive Bootstrap 5 Admin Dashboard</title>
      </MetaTags>

      <Row>
        <Col sm={6}>
          <Card>
            <CardBody>
              <CardTitle className="h4">Default Examples</CardTitle>
              <p className="card-title-desc">
                Progress components are built with two HTML elements, some
                CSS to set the width, and a few attributes.
                  </p>

              <div>
                <div className="mb-4">
                  <Progress color="primary" value={25} />
                </div>
                <div className="mb-4">
                  <Progress color="primary" value={50} />
                </div>
                <div className="mb-4">
                  <Progress color="primary" value={75} />
                </div>
                <div>
                  <Progress color="primary" value={100} />
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>

        <Col sm={6}>
          <Card>
            <CardBody>
              <CardTitle className="h4">Backgrounds</CardTitle>
              <p className="card-title-desc">
                Use background utility classes to change the appearance of
                individual progress bars.
                  </p>

              <div>
                <div className="mb-4">
                  <Progress color="success" value={25} />
                </div>

                <div className="mb-4">
                  <Progress color="info" value={50} />
                </div>

                <div className="mb-4">
                  <Progress color="warning" value={75} />
                </div>

                <div>
                  <Progress color="danger" value={100} />
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg={6}>
          <Card>
            <CardBody>
              <CardTitle className="h4">Labels Example</CardTitle>
              <p className="card-title-desc">
                Add labels to your progress bars by placing text within the{" "}
                <code className="highlighter-rouge">.progress-bar</code>.
                  </p>

              <div className="">
                <Progress color="primary" value={25}>
                  25%
                    </Progress>
              </div>
            </CardBody>
          </Card>
        </Col>

        <Col lg={6}>
          <Card>
            <CardBody>
              <CardTitle className="h4">Multiple bars</CardTitle>
              <p className="card-title-desc">
                Include multiple progress bars in a progress component if
                you need.
                  </p>

              <div className="">
                <Progress multi>
                  <Progress bar color="primary" value={15} />
                  <Progress bar color="success" value={30} />
                  <Progress bar color="info" value={20} />
                </Progress>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg={6}>
          <Card>
            <CardBody>
              <CardTitle className="h4">Height</CardTitle>
              <p className="card-title-desc">
                We only set a{" "}
                <code className="highlighter-rouge">height</code> value on
                    the <code className="highlighter-rouge">  .progress-bar</code>
                    , so if you change that value the outer{" "}
                <code className="highlighter-rouge">.progress</code> will
                    automatically resize accordingly.
                  </p>

              <div className="">
                <Progress
                  className="mb-2 progress-sm"
                  value={25}
                  color="primary"
                  style={{ height: "3px" }}
                />

                <Progress
                  className="mb-0"
                  value={25}
                  color="primary"
                  style={{ height: "24px" }}
                />

              </div>
            </CardBody>
          </Card>
        </Col>

        <Col lg={6}>
          <Card>
            <CardBody>
              <CardTitle className="h4">Animated stripes</CardTitle>
              <p className="card-title-desc">
                The striped gradient can also be animated. Add{" "}
                <code className="highlighter-rouge">
                  {" "}
                      striped animated{" "}
                </code>{" "}
                    to to animate the stripes right to left via CSS3 animations.
                  </p>

              <div className="">
                <Progress striped animated color="primary" value="75" />
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg={6}>
          <Card>
            <CardBody>
              <CardTitle className="h4">Striped</CardTitle>
              <p className="card-title-desc">
                Add <code className="highlighter-rouge"> striped </code> to
                    any to apply a stripe via CSS gradient over the progress
                    bar’s background color.
                  </p>

              <div className="">
                <div className="mb-3">
                  <Progress striped color="primary" value={10} />
                </div>

                <div className="mb-3">
                  <Progress striped color="success" value={25} />
                </div>

                <div className="mb-3">
                  <Progress striped color="info" value={50} />
                </div>

                <div className="mb-3">
                  <Progress striped color="warning" value={75} />
                </div>

                <div>
                  <Progress striped color="danger" value={100} />
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>

    </React.Fragment>
  )
}

export default connect(null, { setBreadcrumbItems })(UiProgressbar);