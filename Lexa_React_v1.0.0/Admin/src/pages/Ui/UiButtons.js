import React, { useEffect, useState } from 'react';
import MetaTags from 'react-meta-tags';
import {
    Col,
    Row,
    Card,
    CardBody,
    Button,
    ButtonGroup,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    ButtonDropdown,
    CardTitle
} from "reactstrap";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

const UiButtons = (props) => {
    const breadcrumbItems = [
        { title: "Lexa", link: "#" },
        { title: "UI Elements", link: "#" },
        { title: "Buttons", link: "#" },
    ]

    useEffect(() => {
        props.setBreadcrumbItems('Buttons', breadcrumbItems)
    })

    const [drp_link, setdrp_link] = useState(false)

    return (
        <React.Fragment>

            <MetaTags>
                <title>Buttons | Lexa - Responsive Bootstrap 5 Admin Dashboard</title>
            </MetaTags>


            <Row>
                <Col lg="6">
                    <Card>
                        <CardBody>

                            <CardTitle className="h4">Examples</CardTitle>
                            <p className="card-title-desc">Bootstrap includes six predefined button styles, each serving its own semantic purpose.</p>

                            <div className="button-items">
                                <Button type="button" color="primary" className="waves-effect waves-light">Primary</Button>{" "}

                                <Button type="button" color="secondary" className="waves-effect">Secondary</Button>{" "}

                                <Button type="button" color="success" className="waves-effect waves-light">Success</Button>{" "}

                                <Button type="button" color="info" className="waves-effect waves-light">Info</Button>{" "}

                                <Button type="button" color="warning" className="waves-effect waves-light">Warning</Button>{" "}

                                <Button type="button" color="danger" className="waves-effect waves-light">Danger</Button>{" "}

                                <Button type="button" color="dark" className="bwaves-effect waves-light">Dark</Button>{" "}

                                <Button type="button" color="link" className="waves-effect">Link</Button>{" "}

                                <Button type="button" color="light" className="waves-effect">Light</Button>{" "}
                            </div>
                        </CardBody>
                    </Card>
                </Col>

                <Col lg="6">
                    <Card>
                        <CardBody>

                            <CardTitle className="h4">Outline buttons</CardTitle>
                            <p className="card-title-desc">Add one another property like <code className="highlighter-rouge">outline</code> ones to remove all background images and colors on any button.</p>

                            <div className="button-items">
                                <Button type="button" outline color="primary" className="waves-effect waves-light">Primary</Button>{" "}

                                <Button type="button" outline color="secondary" className="waves-effect">Secondary</Button>{" "}

                                <Button type="button" outline color="success" className="waves-effect waves-light">Success</Button>{" "}

                                <Button type="button" outline color="info" className="waves-effect waves-light">Info</Button>{" "}

                                <Button type="button" outline color="warning" className="waves-effect waves-light">Warning</Button>{" "}

                                <Button type="button" outline color="danger" className="waves-effect waves-light">Danger</Button>{" "}

                                <Button type="button" outline color="dark" className="bwaves-effect waves-light">Dark</Button>{" "}
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col lg="6">
                    <Card>
                        <CardBody>

                            <CardTitle className="h4">Button tags</CardTitle>
                            <p className="card-title-desc">The <code className="highlighter-rouge">.btn</code> classNamees are designed to be used with the <code className="highlighter-rouge">&lt;Button&gt;</code> element. However, you can also use these classNamees on <code className="highlighter-rouge">&lt;a&gt;</code> or <code className="highlighter-rouge">&lt;input&gt;</code> elements (though some browsers may apply a slightly different rendering).</p>

                            <div className="button-items">
                                <Link className="btn btn-primary waves-effect waves-light" to="#" role="Button">Link</Link>
                                <Button className="btn btn-success waves-effect waves-light" type="submit">Button</Button>{" "}
                                <input className="btn btn-info" type="button" value="Input" />
                                <input className="btn btn-danger" type="submit" value="Submit" />
                                <input className="btn btn-warning" type="reset" value="Reset" />
                            </div>
                        </CardBody>
                    </Card>
                </Col>

                <Col lg="6">
                    <Card>
                        <CardBody>

                            <CardTitle className="h4">Sizes</CardTitle>
                            <p className="card-title-desc">Fancy larger or smaller Buttons? Add {" "}
                                <code className="highlighter-rouge">size="lg"</code> or <code className="highlighter-rouge">size="sm"</code> for additional sizes.
                                    </p>

                            <div className="button-items">
                                <Button type="button" color="primary" size="lg" className="waves-effect waves-light">Large Button</Button>{" "}
                                <Button type="button" color="secondary" size="lg" className="waves-effect">Large Button</Button>{" "}
                                <Button type="button" color="primary" size="sm" className="waves-effect waves-light">Small Button</Button>{" "}
                                <Button type="button" color="secondary" size="sm" className="waves-effect">Small Button</Button>{" "}
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col lg="6">
                    <Card>
                        <CardBody>

                            <CardTitle className="h4">Block Buttons</CardTitle>
                            <p className="card-title-desc">Create block level Buttons—those that span the full width of a parent—by adding property <code className="highlighter-rouge">block</code>.</p>

                            <div className="button-items d-grid gap-2">
                                <Button type="button" color="primary" size="lg" block className="btn-block waves-effect waves-light">Block level Button</Button>{" "}
                                <Button type="button" color="secondary" size="sm" block className="btn-block waves-effect">Block level Button</Button>{" "}
                            </div>
                        </CardBody>
                    </Card>
                </Col>

                <Col lg="6">
                    <Card>
                        <CardBody>

                            <CardTitle className="h4">Toggle states</CardTitle>
                            <p className="card-title-desc">Add <code className="highlighter-rouge">data-toggle="Button"</code> to toggle a Button’s <code className="highlighter-rouge">active</code> state. If you’re pre-toggling a Button, you must manually add the <code className="highlighter-rouge">.active</code> className
                                        <strong>and</strong> <code className="highlighter-rouge">aria-pressed="true"</code> to the
                                        <code className="highlighter-rouge">&lt;Button&gt;</code>.
                                    </p>

                            <div className="button-items">
                                <Button type="button" color="info" className="waves-effect waves-light" data-toggle="Button" aria-pressed="false">
                                    Single toggle
                                        </Button>{" "}

                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col lg="6">
                    <Card>
                        <CardBody>

                            <CardTitle className="h4">Checkbox Buttons</CardTitle>
                            <p className="card-title-desc">Bootstrap’s <code className="highlighter-rouge">.Button</code> styles can be applied to other elements, such as <code className="highlighter-rouge">
                                &lt;label&gt;</code>s, to provide checkbox or radio style Button toggling. Add <code className="highlighter-rouge">data-toggle="Buttons"</code> to a
                                        <code className="highlighter-rouge">.btn-group</code> containing those modified Buttons to enable toggling in their respective styles.</p>

                            <div
                                className="btn-group"
                                role="group" aria-label="Basic checkbox toggle button group"
                            >
                                <input type="checkbox" className="btn-check" id="btncheck1" autoComplete="off" defaultChecked />
                                <label className="btn btn-secondary" htmlFor="btncheck1">Checkbox 1</label>

                                <input type="checkbox" className="btn-check" id="btncheck2" autoComplete="off" />
                                <label className="btn btn-secondary" htmlFor="btncheck2">Checkbox 2</label>

                                <input type="checkbox" className="btn-check" id="btncheck3" autoComplete="off" />
                                <label className="btn btn-secondary" htmlFor="btncheck3">Checkbox 3</label>
                            </div>

                        </CardBody>
                    </Card>
                </Col>

                <Col lg="6">
                    <Card>
                        <CardBody>

                            <CardTitle className="h4">Radio Buttons</CardTitle>
                            <p className="card-title-desc">Bootstrap’s <code className="highlighter-rouge">.button</code> styles can be applied to other elements, such as <code className="highlighter-rouge">
                                &lt;label&gt;</code>s, to provide checkbox or radio style button toggling. Add <code className="highlighter-rouge">data-toggle="buttons"</code> to a
                                            <code className="highlighter-rouge">.btn-group</code> containing those modified buttons to enable toggling in their respective styles.</p>
                            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked />
                                <label className="btn btn-primary" htmlFor="btnradio1">Active</label>

                                <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
                                <label className="btn btn-primary" htmlFor="btnradio2">Radio</label>

                                <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" />
                                <label className="btn btn-primary" htmlFor="btnradio3">Radio</label>
                            </div>

                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col lg="6">
                    <Card>
                        <CardBody>

                            <CardTitle className="h4">Button group</CardTitle>
                            <p className="card-title-desc">Wrap a series of Buttons with <code className="highlighter-rouge">&lt;ButtonGroup&gt;</code>.</p>

                            <ButtonGroup role="group" aria-label="Basic example">
                                <Button type="button" color="secondary">Left</Button>{" "}
                                <Button type="button" color="secondary">Middle</Button>{" "}
                                <Button type="button" color="secondary">Right</Button>{" "}
                            </ButtonGroup>

                        </CardBody>
                    </Card>
                </Col>

                <Col lg="6">
                    <Card>
                        <CardBody>

                            <CardTitle className="h4">Button toolbar</CardTitle>
                            <p className="card-title-desc">Combine sets of Button groups into Button toolbars for more complex components. Use utility classNamees as needed to space out groups, Buttons, and more.</p>

                            <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with Button groups">
                                <ButtonGroup className="me-2" role="group" aria-label="First group">
                                    <Button type="button" color="secondary">1</Button>{" "}
                                    <Button type="button" color="secondary">2</Button>{" "}
                                    <Button type="button" color="secondary">3</Button>{" "}
                                    <Button type="button" color="secondary">4</Button>{" "}
                                </ButtonGroup>
                                <ButtonGroup className="me-2" role="group" aria-label="Second group">
                                    <Button type="button" color="secondary">5</Button>{" "}
                                    <Button type="button" color="secondary">6</Button>{" "}
                                    <Button type="button" color="secondary">7</Button>{" "}
                                </ButtonGroup>
                                <ButtonGroup role="group" aria-label="Third group">
                                    <Button type="button" color="secondary">8</Button>{" "}
                                </ButtonGroup>
                            </div>

                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col lg="6">
                    <Card>
                        <CardBody>

                            <CardTitle className="h4">Sizing</CardTitle>
                            <p className="card-title-desc">Instead of applying Button sizing classNames to every Button in a group, just add <code className="highlighter-rouge">size=""</code> to each <code className="highlighter-rouge">&lt;ButtonGroup&gt;</code>, including each one when nesting multiple groups.</p>

                            <ButtonGroup size="lg" role="group" aria-label="Basic example">
                                <Button type="button" color="secondary">Left</Button>{" "}
                                <Button type="button" color="secondary">Middle</Button>{" "}
                                <Button type="button" color="secondary">Right</Button>{" "}
                            </ButtonGroup>

                            <br />

                            <ButtonGroup className="mt-2" role="group" aria-label="Basic example">
                                <Button type="button" color="secondary">Left</Button>{" "}
                                <Button type="button" color="secondary">Middle</Button>{" "}
                                <Button type="button" color="secondary">Right</Button>{" "}
                            </ButtonGroup>

                            <br />

                            <ButtonGroup size="sm" className="mt-2" role="group" aria-label="Basic example">
                                <Button type="button" color="secondary">Left</Button>{" "}
                                <Button type="button" color="secondary">Middle</Button>{" "}
                                <Button type="button" color="secondary">Right</Button>{" "}
                            </ButtonGroup>

                        </CardBody>
                    </Card>
                </Col>

                <Col lg="6">
                    <Card>
                        <CardBody>

                            <CardTitle className="h4">Vertical variation</CardTitle>
                            <p className="card-title-desc">Make a set of Buttons appear vertically stacked rather than horizontally. Split Button dropdowns are not supported here.</p>

                            <div className="btn-group-vertical" role="group" aria-label="Vertical Button group">
                                <Button type="button" className="btn btn-secondary">Button</Button>{" "}
                                <ButtonDropdown
                                    isOpen={drp_link}
                                    toggle={() => {
                                        setdrp_link(!drp_link)
                                    }}
                                >
                                    <DropdownToggle caret color="secondary">
                                        Dropdown <i className="mdi mdi-chevron-down"></i>
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>Dropdown link</DropdownItem>
                                        <DropdownItem>Dropdown link</DropdownItem>
                                    </DropdownMenu>
                                </ButtonDropdown>
                                <Button type="button" className="btn btn-secondary">Button</Button>{" "}
                                <Button type="button" className="btn btn-secondary">Button</Button>{" "}
                            </div>

                        </CardBody>
                    </Card>
                </Col>
            </Row>

        </React.Fragment>
    );
}

export default connect(null, { setBreadcrumbItems })(UiButtons);