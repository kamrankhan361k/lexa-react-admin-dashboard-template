import React, { Component } from 'react';
import {
    Col,
    Card,
    UncontrolledTooltip
} from "reactstrap";
import { Link } from "react-router-dom";

class CardUser extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.users.map((user, key) =>
                        <Col xl="4" md="6" key={key}>
                            <Card className="directory-card">
                                <div>
                                    <div className="directory-bg text-center">
                                        <div className="directory-overlay">
                                            <img className="rounded-circle avatar-lg img-thumbnail" src={user.imgUrl} alt="Generic placeholder" />
                                        </div>
                                    </div>

                                    <div className="directory-content text-center p-4">
                                        <p className=" mt-4">{user.designation}</p>
                                        <h5 className="font-size-16">{user.name}</h5>

                                        <p className="text-muted">{user.desc}</p>

                                        <ul className="social-links list-inline mb-0 mt-4">
                                            {
                                                user.socials.map((social, key) =>
                                                    <React.Fragment key={key}>
                                                        <li className="list-inline-item">
                                                            <Link title="" className={"tooltips btn-" + social.colorclass} id={social.title + user.id} to={social.link}><i className={social.icon}></i></Link>
                                                            <UncontrolledTooltip placement="top" target={social.title + user.id}>
                                                                {social.title}
                                                            </UncontrolledTooltip>
                                                        </li>{" "}
                                                    </React.Fragment>
                                                )
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    )
                }
            </React.Fragment>
        );
    }
}

export default CardUser;