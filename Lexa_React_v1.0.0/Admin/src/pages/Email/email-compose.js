import React, { useEffect } from "react"
import MetaTags from 'react-meta-tags';
import { Row, Col, Card, Input } from "reactstrap"
import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

//Import Email Sidebar
import EmailSideBar from "./email-sidebar"
import { Editor } from "react-draft-wysiwyg"

const EmailCompose = (props) => {
    const breadcrumbItems = [
        { title: "Lexa", link: "#" },
        { title: "Email", link: "#" },
        { title: "Email Compose", link: "#" },
    ]

    useEffect(() => {
        props.setBreadcrumbItems('Email Compose', breadcrumbItems)
    }) 

    return (
        <React.Fragment>

            <MetaTags>
                <title>Email Compose | Lexa - Responsive Bootstrap 5 Admin Dashboard</title>
            </MetaTags>

            <Row>
                <Col xs="12">
                    {/* Render Email SideBar */}
                    <EmailSideBar />

                    <div className="email-rightbar mb-3">
                        <Card>
                            <div className="card-body">

                                <div>
                                    <div className="mb-3">
                                        <Input type="email" className="form-control" placeholder="To" />
                                    </div>

                                    <div className="mb-3">
                                        <Input type="text" className="form-control" placeholder="Subject" />
                                    </div>
                                    <div className="mb-3">
                                        <form method="post">
                                            <Editor
                                                toolbarClassName="toolbarClassName"
                                                wrapperClassName="wrapperClassName"
                                                editorClassName="editorClassName"
                                            />
                                        </form>
                                    </div>

                                    <div className="btn-toolbar form-group mb-0">
                                        <div className="">
                                            <button type="button" className="btn btn-success waves-effect waves-light me-1"><i className="far fa-save"></i></button>
                                            <button type="button" className="btn btn-success waves-effect waves-light me-1"><i className="far fa-trash-alt"></i></button>
                                            <button className="btn btn-primary waves-effect waves-light">
                                                <span>Send</span> <i className="fab fa-telegram-plane ms-2"></i>
                                            </button>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </Card>
                    </div>
                </Col>
            </Row>

        </React.Fragment>
    )
}

export default connect(null, { setBreadcrumbItems })(EmailCompose);