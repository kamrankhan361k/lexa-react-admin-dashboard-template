import React,{useEffect} from "react"
import MetaTags from 'react-meta-tags';

import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

const PagesBlank = (props) => {
    const breadcrumbItems = [
        { title: "Lexa", link: "#" },
        { title: "Pages", link: "#" },
        { title: "Blank page", link: "#" },
    ]

    useEffect(() => {
        props.setBreadcrumbItems('Blank page', breadcrumbItems)
    })

    return (
        <React.Fragment>
            <MetaTags>
                <title>Starter Page | Lexa - Responsive Bootstrap 5 Admin Dashboard</title>
            </MetaTags>
        </React.Fragment>
    )
}

export default connect(null, { setBreadcrumbItems })(PagesBlank);