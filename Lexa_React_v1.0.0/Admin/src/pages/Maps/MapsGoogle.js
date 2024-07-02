import PropTypes from 'prop-types'
import React ,{useEffect} from "react"
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react"
import { connect } from "react-redux"
import MetaTags from 'react-meta-tags';
import LightData from "./LightData"
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap"

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

const LoadingContainer = () => <div>Loading...</div>

const MapsGoogle = props => {

  const breadcrumbItems = [
    { title: "Lexa", link: "#" },
    { title: "Maps", link: "#" },
    { title: "Google Maps", link: "#" },
  ]

  useEffect(() => {
    props.setBreadcrumbItems('Google Maps', breadcrumbItems)
  })

  const selectedPlace = {}

  function onMarkerClick() {
    alert("You clicked in this marker")
  }

  return (
    <React.Fragment>

      <MetaTags>
        <title>Google Maps | Lexa - Responsive Bootstrap 5 Admin Dashboard</title>
      </MetaTags>

      <Row>
        <Col lg={6}>
          <Card>
            <CardBody>
              <CardTitle>Markers</CardTitle>
              <CardSubtitle className="mb-3">
                Example of google maps.
                  </CardSubtitle>
              <div
                id="gmaps-markers"
                className="gmaps"
                style={{ position: "relative" }}
              >
                <Map
                  google={props.google}
                  style={{ width: "100%", height: "100%" }}
                  zoom={14}
                >
                  <Marker
                    title={"The marker`s title will appear as a tooltip."}
                    name={"SOMA"}
                    position={{ lat: 37.778519, lng: -122.40564 }}
                  />
                  <Marker name={"Dolores park"} />
                  <InfoWindow>
                    <div>
                      <h1>{selectedPlace.name}</h1>
                    </div>
                  </InfoWindow>
                </Map>
              </div>
            </CardBody>
          </Card>
        </Col>

        <Col lg={6}>
          <Card>
            <CardBody>
              <CardTitle>Overlays</CardTitle>
              <CardSubtitle className="mb-3">
                Example of google maps.
                  </CardSubtitle>
              <div
                id="gmaps-overlay"
                className="gmaps"
                style={{ position: "relative" }}
              >
                <Map
                  google={props.google}
                  zoom={14}
                  style={{ width: "100%", height: "100%" }}
                  initialCenter={{
                    lat: 40.854885,
                    lng: -88.081807,
                  }}
                >
                  <Marker
                    onClick={(a, b, c) => {
                      onMarkerClick(a, b, c)
                    }}
                  />
                  <InfoWindow>
                    <div>
                      <h1>{selectedPlace.name}</h1>
                    </div>
                  </InfoWindow>
                </Map>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg={6}>
          <Card>
            <CardBody>
              <CardTitle>Basic</CardTitle>
              <CardSubtitle className="mb-3">
                Example of google maps.
                  </CardSubtitle>
              <div
                id="gmaps-markers"
                className="gmaps"
                style={{ position: "relative" }}
              >
                <Map
                  google={props.google}
                  zoom={14}
                  style={{ width: "100%", height: "100%" }}
                >
                  <InfoWindow>
                    <div>
                      <h1>{selectedPlace.name}</h1>
                    </div>
                  </InfoWindow>
                </Map>
              </div>
            </CardBody>
          </Card>
        </Col>

        <Col lg={6}>
          <Card>
            <CardBody>
              <CardTitle>Ultra Light</CardTitle>
              <CardSubtitle className="mb-3">
                Example of google maps.
                  </CardSubtitle>
              <div
                id="gmaps-overlay"
                className="gmaps"
                style={{ position: "relative" }}
              >
                <Map
                  google={props.google}
                  zoom={14}
                  styles={LightData.Data}
                  style={{ width: "100%", height: "100%" }}
                >
                  <Marker
                    onClick={(a, b, c) => {
                      onMarkerClick(a, b, c)
                    }}
                  />
                  <InfoWindow>
                    <div>
                      <h1>{selectedPlace.name}</h1>
                    </div>
                  </InfoWindow>
                </Map>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>

    </React.Fragment>
  )
}

MapsGoogle.propTypes = {
  google: PropTypes.object
}

export default connect(
  null,
  { setBreadcrumbItems }
)(
  GoogleApiWrapper({
    apiKey: "AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE",
    LoadingContainer: LoadingContainer,
    v: "3",
  })(MapsGoogle)
)
