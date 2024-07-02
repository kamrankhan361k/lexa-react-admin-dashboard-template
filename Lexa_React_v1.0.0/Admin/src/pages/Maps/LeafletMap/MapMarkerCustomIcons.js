import React, { Component } from "react"
import Leaflet from "leaflet"
import { Map, TileLayer, Marker, Popup } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

Leaflet.Icon.Default.imagePath = "../node_modules/leaflet"

delete Leaflet.Icon.Default.prototype._getIconUrl

Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
})

export const pointerIcon = new L.Icon({
  iconUrl: "../../../assets/images/logo-sm.png",
  iconRetinaUrl: "../../../assets/images/logo-sm.png",
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [25, 55],
  shadowUrl: "../../../assets/images/logo-sm.png",
  shadowSize: [68, 95],
  shadowAnchor: [20, 92],
})

export default class MapMarkerCustomIcons extends Component {
  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13,
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <Map
        center={position}
        zoom={this.state.zoom}
        style={{ height: "300px" }}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={pointerIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    )
  }
}
