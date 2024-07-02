import React, { useEffect } from 'react';
import { Row } from "reactstrap";

import MetaTags from 'react-meta-tags';

import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

//Import Components
import CardUser from "./card-user";

//Import Images
import user2 from "../../assets/images/users/user-2.jpg";
import user3 from "../../assets/images/users/user-3.jpg";
import user4 from "../../assets/images/users/user-4.jpg";
import user5 from "../../assets/images/users/user-5.jpg";
import user6 from "../../assets/images/users/user-6.jpg";
import user7 from "../../assets/images/users/user-7.jpg";

const PagesDirectory = (props) => {
    const breadcrumbItems = [
        { title: "Lexa", link: "#" },
        { title: "Pages", link: "#" },
        { title: "Directory", link: "#" },
    ]

    useEffect(() => {
        props.setBreadcrumbItems('Directory', breadcrumbItems)
    },[])

    const users = [
        {
            id: 1, imgUrl: user2, designation: "Creative Director", name: "Katherine J. McAvoy", desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
            socials: [
                { id: 1, title: "Facebook", icon: "fab fa-facebook-f", link: "#", colorclass: "primary" },
                { id: 2, title: "Twitter", icon: "fab fa-twitter", link: "#", colorclass: "info" },
                { id: 3, title: "mobile", icon: "fa fa-phone", link: "#", colorclass: "danger" },
                { id: 4, title: "skype", icon: "fab fa-skype", link: "#", colorclass: "info" },
            ]
        },
        {
            id: 2, imgUrl: user3, designation: "Creative Director", name: "Richard L. Jackson", desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
            socials: [
                { id: 1, title: "Facebook", icon: "fab fa-facebook-f", link: "#", colorclass: "primary" },
                { id: 2, title: "Twitter", icon: "fab fa-twitter", link: "#", colorclass: "info" },
                { id: 3, title: "mobile", icon: "fa fa-phone", link: "#", colorclass: "danger" },
                { id: 4, title: "skype", icon: "fab fa-skype", link: "#", colorclass: "info" },
            ]
        },
        {
            id: 3, imgUrl: user4, designation: "Creative Director", name: "Joshua D. Pearson", desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
            socials: [
                { id: 1, title: "Facebook", icon: "fab fa-facebook-f", link: "#", colorclass: "primary" },
                { id: 2, title: "Twitter", icon: "fab fa-twitter", link: "#", colorclass: "info" },
                { id: 3, title: "mobile", icon: "fa fa-phone", link: "#", colorclass: "danger" },
                { id: 4, title: "skype", icon: "fab fa-skype", link: "#", colorclass: "info" },
            ]
        },
        {
            id: 4, imgUrl: user5, designation: "Creative Director", name: "Michael J. Folma", desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
            socials: [
                { id: 1, title: "Facebook", icon: "fab fa-facebook-f", link: "#", colorclass: "primary" },
                { id: 2, title: "Twitter", icon: "fab fa-twitter", link: "#", colorclass: "info" },
                { id: 3, title: "mobile", icon: "fa fa-phone", link: "#", colorclass: "danger" },
                { id: 4, title: "skype", icon: "fab fa-skype", link: "#", colorclass: "info" },
            ]
        },
        {
            id: 5, imgUrl: user6, designation: "Creative Director", name: "Samuel P. Augustus", desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
            socials: [
                { id: 1, title: "Facebook", icon: "fab fa-facebook-f", link: "#", colorclass: "primary" },
                { id: 2, title: "Twitter", icon: "fab fa-twitter", link: "#", colorclass: "info" },
                { id: 3, title: "mobile", icon: "fa fa-phone", link: "#", colorclass: "danger" },
                { id: 4, title: "skype", icon: "fab fa-skype", link: "#", colorclass: "info" },
            ]
        },
        {
            id: 6, imgUrl: user7, designation: "Creative Director", name: "Joseph D. Starnes", desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
            socials: [
                { id: 1, title: "Facebook", icon: "fab fa-facebook-f", link: "#", colorclass: "primary" },
                { id: 2, title: "Twitter", icon: "fab fa-twitter", link: "#", colorclass: "info" },
                { id: 3, title: "mobile", icon: "fa fa-phone", link: "#", colorclass: "danger" },
                { id: 4, title: "skype", icon: "fab fa-skype", link: "#", colorclass: "info" },
            ]
        }
    ]

    return (
        <React.Fragment>
            <MetaTags>
                <title>Directory | Lexa - Responsive Bootstrap 5 Admin Dashboard</title>
            </MetaTags>

            <Row>
                <CardUser users={users} />
            </Row>
        </React.Fragment>
    );
}

export default connect(null, { setBreadcrumbItems })(PagesDirectory);