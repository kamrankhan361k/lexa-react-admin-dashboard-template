import React, { Component } from 'react';
import { Table, Card, Badge, Button } from "reactstrap";

//Import Images
import user1 from "../../assets/images/users/user-1.jpg";
import user2 from "../../assets/images/users/user-2.jpg";
import user3 from "../../assets/images/users/user-3.jpg";
import user4 from "../../assets/images/users/user-4.jpg";
import user5 from "../../assets/images/users/user-5.jpg";
import user6 from "../../assets/images/users/user-6.jpg";

class LatestOrders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [
                { imgUrl: user1, id: "12354781", name: "Riverston Glass Chair", status: "Delivered", amount: "185", date: "5/12/2016", color: "success" },
                { imgUrl: user2, id: "52140300", name: "Shine Company Catalina", status: "Delivered", amount: "1,024", date: "5/12/2016", color: "success" },
                { imgUrl: user3, id: "96254137", name: "Trex Outdoor Furniture Cape", status: "Cancel", amount: "657", date: "5/12/2016", color: "danger" },
                { imgUrl: user4, id: "12365474", name: "Oasis Bathroom Teak Corner	", status: "Shipped", amount: "8451", date: "5/12/2016", color: "warning" },
                { imgUrl: user5, id: "85214796", name: "BeoPlay Speaker", status: "Delivered", amount: "584", date: "5/12/2016", color: "success" },
                { imgUrl: user6, id: "12354781", name: "Riverston Glass Chair", status: "Delivered", amount: "185", date: "5/12/2016", color: "success" },
            ]
        }
    }

    render() {
        return (
            <React.Fragment>
                <Card>
                    <div className="card-body">
                        <h4 className="card-title mb-4">Latest Orders</h4>

                        <div className="table-responsive">
                            <Table className="align-middle table-centered table-vertical table-nowrap mb-1">

                                <tbody>
                                    {
                                        this.state.orders.map((order, key) =>
                                            <tr key={key}>
                                                <td>#{order.id}</td>
                                                <td>
                                                    <img src={order.imgUrl} alt="user" className="avatar-xs me-2 rounded-circle" /> {order.name}
                                                </td>
                                                <td><Badge className={"rounded-pill bg-" + order.color}>{order.status}</Badge></td>
                                                <td>
                                                    ${order.amount}
                                                </td>
                                                <td>
                                                    {order.date}
                                                </td>
                                                <td>
                                                    <Button color="secondary" size="sm" className="waves-effect waves-light">Edit</Button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </Card>
            </React.Fragment>
        );
    }
}

export default LatestOrders;