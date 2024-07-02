import React, { useState } from "react"
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"
import { Dropdown, DropdownToggle, DropdownMenu, Row, Col } from "reactstrap"
import SimpleBar from "simplebar-react"

//Import images
import avatar3 from "../../../assets/images/users/user-3.jpg"
import avatar4 from "../../../assets/images/users/user-4.jpg"

//i18n
import { withTranslation } from "react-i18next"

const NotificationDropdown = props => {
  // Declare a new state variable, which we'll call "menu"
  const [menu, setMenu] = useState(false)

  return (
    <React.Fragment>
      <Dropdown
        isOpen={menu}
        toggle={() => setMenu(!menu)}
        className="dropdown d-inline-block ms-1"
        tag="li"
      >
        <DropdownToggle
          className="btn header-item noti-icon waves-effect"
          tag="button"
          id="page-header-notifications-dropdown"
        >
          <i className="ti-bell"></i>
          <span className="badge bg-danger rounded-pill">3</span>
        </DropdownToggle>

        <DropdownMenu className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0">
          <div className="p-3">
            <Row className="align-items-center">
              <Col>
                <h5 className="m-0"> {props.t("Notifications")} (258) </h5>
              </Col>
            </Row>
          </div>

          <SimpleBar style={{ height: "230px" }}>
            <Link to="#" className="text-reset notification-item">
              <div className="media">
                <div className="avatar-xs me-3">
                  <span className="avatar-title border-success rounded-circle ">
                    <i className="mdi mdi-cart-outline"></i>
                  </span>
                </div>
                <div className="media-body">
                  <h6 className="mt-0 mb-1">Your order is placed</h6>
                  <div className="text-muted">
                    <p className="mb-1">If several languages coalesce the grammar</p>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="#" className="text-reset notification-item">
              <div className="media">
                <div className="avatar-xs me-3">
                  <span className="avatar-title border-warning rounded-circle ">
                    <i className="mdi mdi-message"></i>
                  </span>
                </div>
                <div className="media-body">
                  <h6 className="mt-0 mb-1">New Message received</h6>
                  <div className="text-muted">
                    <p className="mb-1">You have 87 unread messages</p>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="#" className="text-reset notification-item">
              <div className="media">
                <div className="avatar-xs me-3">
                  <span className="avatar-title border-info rounded-circle ">
                    <i className="mdi mdi-glass-cocktail"></i>
                  </span>
                </div>
                <div className="media-body">
                  <h6 className="mt-0 mb-1">Your item is shipped</h6>
                  <div className="text-muted">
                    <p className="mb-1">It is a long established fact that a reader will</p>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="#" className="text-reset notification-item">
              <div className="media">
                <div className="avatar-xs me-3">
                  <span className="avatar-title border-primary rounded-circle ">
                    <i className="mdi mdi-cart-outline"></i>
                  </span>
                </div>
                <div className="media-body">
                  <h6 className="mt-0 mb-1">Your order is placed</h6>
                  <div className="text-muted">
                    <p className="mb-1">Dummy text of the printing and typesetting industry.</p>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="#" className="text-reset notification-item">
              <div className="media">
                <div className="avatar-xs me-3">
                  <span className="avatar-title border-warning rounded-circle ">
                    <i className="mdi mdi-message"></i>
                  </span>
                </div>
                <div className="media-body">
                  <h6 className="mt-0 mb-1">New Message received</h6>
                  <div className="text-muted">
                    <p className="mb-1">You have 87 unread messages</p>
                  </div>
                </div>
              </div>
            </Link>
          </SimpleBar>
          <div className="p-2 border-top d-grid">
            <Link
              className="btn btn-sm btn-link font-size-14 btn-block text-center"
              to="#"
            >
              <i className="mdi mdi-arrow-right-circle me-1"></i>
              {" "}
              {props.t("View all")}{" "}
            </Link>
          </div>
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  )
}

export default withTranslation()(NotificationDropdown)

NotificationDropdown.propTypes = {
  t: PropTypes.any
}