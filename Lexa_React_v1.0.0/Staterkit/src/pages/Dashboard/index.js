import React, { useEffect } from "react"
import MetaTags from 'react-meta-tags';
import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

const Dashboard = (props) => {

  const breadcrumbItems = [
    { title: "Lexa", link: "#" },
    { title: "Dashboard", link: "#" }
  ]

  useEffect(() => {
    props.setBreadcrumbItems('Dashboard', breadcrumbItems)
  })

  return (
    <React.Fragment>

      <MetaTags>
        <title>Dashboard | Lexa - Responsive Bootstrap 5 Admin Dashboard</title>
      </MetaTags>

    </React.Fragment>
  )
}

export default connect(null, { setBreadcrumbItems })(Dashboard);