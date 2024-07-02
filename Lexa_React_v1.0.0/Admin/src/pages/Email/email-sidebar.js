import React, { useState } from "react"
import { Link } from "react-router-dom"
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Card,
  Media,
} from "reactstrap"

// Import Editor
import { Editor } from "react-draft-wysiwyg"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

//Import images
import avatar2 from "../../assets/images/users/user-2.jpg"
import avatar3 from "../../assets/images/users/user-3.jpg"
import avatar4 from "../../assets/images/users/user-4.jpg"
import avatar6 from "../../assets/images/users/user-6.jpg"

const EmailSideBar = () => {
  const [modal, setmodal] = useState(false)

  return (
    <React.Fragment>
      <Card className="email-leftbar">
        <Button
          type="button"
          color="danger"
          className="rounded btn-custom btn-block waves-effect waves-light"
          onClick={() => {
            setmodal(!modal)
          }}
          block
        >
          Compose
        </Button>
        <div className="mail-list mt-3">
          <Link to="email-inbox" className="active">
            Inbox{" "}
            <span className="ms-1">(18)</span>
          </Link>
          <Link to="#">
            Starred
          </Link>
          <Link to="#">
            Important
          </Link>
          <Link to="#">
            Draft
          </Link>
          <Link to="#">
            Sent Mail
          </Link>
          <Link to="#">
            Trash
          </Link>
        </div>

        <h5 className="mt-4">Labels</h5>

        <div className="mail-list mt-3">
          <Link to="#">
            <span className="mdi mdi-arrow-right-drop-circle text-info float-end mt-1 ms-2"></span>
            Theme Support
          </Link>
          <Link to="#">
            <span className="mdi mdi-arrow-right-drop-circle text-warning float-end mt-1 ms-2"></span>
            Freelance
          </Link>
          <Link to="#">
            <span className="mdi mdi-arrow-right-drop-circle text-primary float-end mt-1 ms-2"></span>
            Social
          </Link>
          <Link to="#">
            <span className="mdi mdi-arrow-right-drop-circle text-danger float-end mt-1 ms-2"></span>
            Friends
          </Link>
          <Link to="#">
            <span className="mdi mdi-arrow-right-drop-circle text-success float-end mt-1 ms-2"></span>
            Family
          </Link>
        </div>

        <h5 className="mt-4">Chat</h5>

        <div className="mt-3">
          <Link to="#" className="media">
            <img
              className="d-flex me-3 rounded-circle"
              src={avatar2}
              alt="lexa"
              height="36"
            />
            <Media className="chat-user-box" body>
              <p className="user-title m-0">Scott Median</p>
              <p className="text-muted">Hello</p>
            </Media>
          </Link>

          <Link to="#" className="media">
            <img
              className="d-flex me-3 rounded-circle"
              src={avatar3}
              alt="lexa"
              height="36"
            />
            <Media className="chat-user-box" body>
              <p className="user-title m-0">Julian Rosa</p>
              <p className="text-muted">What about our next..</p>
            </Media>
          </Link>

          <Link to="#" className="media">
            <img
              className="d-flex me-3 rounded-circle"
              src={avatar4}
              alt="lexa"
              height="36"
            />
            <Media className="chat-user-box" body>
              <p className="user-title m-0">David Medina</p>
              <p className="text-muted">Yeah everything is fine</p>
            </Media>
          </Link>

          <Link to="#" className="media">
            <img
              className="d-flex me-3 rounded-circle"
              src={avatar6}
              alt="lexa"
              height="36"
            />
            <Media className="chat-user-box" body>
              <p className="user-title m-0">Jay Baker</p>
              <p className="text-muted">Wow that's great</p>
            </Media>
          </Link>
        </div>
      </Card>

      <Modal
        isOpen={modal}
        role="dialog"
        autoFocus={true}
        centered={true}
        className="exampleModal"
        tabIndex="-1"
        toggle={() => {
          setmodal(!modal)
        }}
      >
        <div className="modal-content">
          <ModalHeader
            toggle={() => {
              setmodal(!modal)
            }}
          >
            New Message
          </ModalHeader>
          <ModalBody>
            <form>
              <div className="mb-3">
                <Input type="email" className="form-control" placeholder="To" />
              </div>

              <div className="mb-3">
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                />
              </div>
              <Editor
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
              />
            </form>
          </ModalBody>
          <ModalFooter>
            <Button
              type="button"
              color="secondary"
              onClick={() => {
                setmodal(!modal)
              }}
            >
              Close
            </Button>
            <Button type="button" color="primary">
              Send <i className="fab fa-telegram-plane ms-1"></i>
            </Button>
          </ModalFooter>
        </div>
      </Modal>
    </React.Fragment>
  )
}

export default EmailSideBar
