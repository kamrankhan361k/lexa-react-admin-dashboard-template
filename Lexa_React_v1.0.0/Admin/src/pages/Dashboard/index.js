import React , {useEffect} from "react"
import MetaTags from 'react-meta-tags';
import { connect } from "react-redux";
import {
  Row,
  Col,
} from "reactstrap"

// Pages Components
import Miniwidget from "./Miniwidget"
import MonthlyEarnings from "./montly-earnings";
import EmailSent from "./email-sent";
import MonthlyEarnings2 from "./montly-earnings2";
import Inbox from "./inbox";
import RecentActivity from "./recent-activity";
import WidgetUser from "./widget-user";
import YearlySales from "./yearly-sales";
import LatestTransactions from "./latest-transactions";
import LatestOrders from "./latest-orders";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

const Dashboard = (props) => {

  const breadcrumbItems = [
    { title: "Lexa", link: "#" },
    { title: "Dashboard", link: "#" }
  ]

  useEffect(() => {
    props.setBreadcrumbItems('Dashboard' , breadcrumbItems)
  },)

  const reports = [
    { title: "Orders", iconClass: "cube-outline", total: "1,587", average: "+11%", badgecolor: "info" },
    { title: "Revenue", iconClass: "buffer", total: "$46,782", average: "-29%", badgecolor: "danger" },
    { title: "Average Price", iconClass: "tag-text-outline", total: "$15.9", average: "0%", badgecolor: "warning" },
    { title: "Product Sold", iconClass: "briefcase-check", total: "1890", average: "+89%", badgecolor: "info" },
  ]

  return (
    <React.Fragment>

      <MetaTags>
        <title>Dashboard | Lexa - Responsive Bootstrap 5 Admin Dashboard</title>
      </MetaTags>

      {/*mimi widgets */}
      <Miniwidget reports={reports} />

      <Row>
        <Col xl="3">
          {/* Monthly Earnings */}
          <MonthlyEarnings />
        </Col>

        <Col xl="6">
          {/* Email sent */}
          <EmailSent />
        </Col>

        <Col xl="3">
          <MonthlyEarnings2 />
        </Col>

      </Row>
      <Row>

        <Col xl="4" lg="6">
          {/* inbox */}
          <Inbox />
        </Col>
        <Col xl="4" lg="6">
          {/* recent activity */}
          <RecentActivity />

        </Col>
        <Col xl="4">
          {/* widget user */}
          <WidgetUser />

          {/* yearly sales */}
          <YearlySales />
        </Col>
      </Row>

      <Row>
        <Col xl="6">
          {/* latest transactions */}
          <LatestTransactions />
        </Col>

        <Col xl="6">
          {/* latest orders */}
          <LatestOrders />
        </Col>
      </Row>

    </React.Fragment>
  )
}

export default connect(null, { setBreadcrumbItems })(Dashboard);