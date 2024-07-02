import React, { Component } from 'react';
import { Card } from "reactstrap";

//Import Images
import user2 from "../../assets/images/users/user-2.jpg";

class WidgetUser extends Component {

    render() {
        return (
            <React.Fragment>
                <Card className="widget-user">
                    <div className="widget-user-desc p-4 text-center bg-primary position-relative">
                        <i className="fas fa-quote-left h2 text-white-50"></i>
                        <p className="text-white mb-0">The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe the same vocabulary. The languages only in their grammar.</p>
                    </div>
                    <div className="p-4">
                        <div className="float-start mt-2 me-3">
                            <img src={user2} alt="" className="rounded-circle avatar-sm" />
                        </div>
                        <h6 className="mb-1 font-size-16 mt-2">Marie Minnick</h6>
                        <p className="text-muted mb-0">Marketing Manager</p>
                    </div>
                </Card>
            </React.Fragment>
        );
    }
}

export default WidgetUser;