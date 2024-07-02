import PropTypes from 'prop-types'
import MetaTags from 'react-meta-tags';
import React, { useState, useEffect } from "react"
import {
  Row,
  Col,
  Card,
  Alert,
  CardBody,
  Media,
  Button,
} from "reactstrap"

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation"

// Redux
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

import avatar from "../../assets/images/users/user-1.jpg"
// actions
import { editProfile, resetProfileFlag } from "../../store/actions"

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

const UserProfile = props => {
  
  const [email, setemail] = useState("")
  const [name, setname] = useState("")
  const [idx, setidx] = useState(1)

  useEffect(() => {
    if (localStorage.getItem("authUser")) {
      const obj = JSON.parse(localStorage.getItem("authUser"))
      if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
        setname(obj.displayName)
        setemail(obj.email)
        setidx(obj.uid)
      } else if (
        process.env.REACT_APP_DEFAULTAUTH === "fake" ||
        process.env.REACT_APP_DEFAULTAUTH === "jwt"
      ) {
        setname(obj.username)
        setemail(obj.email)
        setidx(obj.uid)
      }
      setTimeout(() => {
        props.resetProfileFlag();
      }, 3000);
    }
  }, [props.success])

  const breadcrumbItems = [
    { title: "Lexa", link: "#" },
    { title: "Profile", link: "#" },
  ]

  useEffect(() => {
    props.setBreadcrumbItems('Profile', breadcrumbItems)
  })

  function handleValidSubmit(event, values) {
    props.editProfile(values)
  }

  return (
    <React.Fragment>
      <MetaTags>
        <title>Profile | Lexa - Responsive Bootstrap 5 Admin Dashboard</title>
      </MetaTags>


      <Row>
        <Col lg="12">
          {props.error && props.error ? (
            <Alert color="danger">{props.error}</Alert>
          ) : null}
          {props.success ? (
            <Alert color="success">{props.success}</Alert>
          ) : null}

          <Card>
            <CardBody>
              <Media>
                <div className="ms-3">
                  <img
                    src={avatar}
                    alt=""
                    className="avatar-md rounded-circle img-thumbnail"
                  />
                </div>
                <Media body className="align-self-center">
                  <div className="text-muted">
                    <h5>{name}</h5>
                    <p className="mb-1">{email}</p>
                    <p className="mb-0">Id no: #{idx}</p>
                  </div>
                </Media>
              </Media>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <h4 className="card-title mb-4">Change User Name</h4>

      <Card>
        <CardBody>
          <AvForm
            className="form-horizontal"
            onValidSubmit={(e, v) => {
              handleValidSubmit(e, v)
            }}
          >
            <div className="form-group">
              <AvField
                name="username"
                label="User Name"
                value={name}
                className="form-control"
                placeholder="Enter User Name"
                type="text"
                required
              />
              <AvField name="idx" value={idx} type="hidden" />
            </div>
            <div className="text-center mt-4">
              <Button type="submit" color="danger">
                Edit User Name
                  </Button>
            </div>
          </AvForm>
        </CardBody>
      </Card>

    </React.Fragment>
  )
}

UserProfile.propTypes = {
  editProfile: PropTypes.func,
  error: PropTypes.any,
  success: PropTypes.any
}

const mapStatetoProps = state => {
  const { error, success } = state.Profile
  return { error, success }
}

export default withRouter(
  connect(mapStatetoProps, { editProfile, resetProfileFlag, setBreadcrumbItems })(UserProfile)
)