import React,{useEffect} from "react"
import MetaTags from 'react-meta-tags';

import { Row, Col, Card, CardBody, CardTitle } from "reactstrap"
// Editable
import BootstrapTable from "react-bootstrap-table-next"
import cellEditFactory from "react-bootstrap-table2-editor"

import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

const products = [
  { id: 1, age: 25, qty: 1500, cost: 1000 },
  { id: 2, age: 34, qty: 1900, cost: 1300 },
  { id: 3, age: 67, qty: 1300, cost: 1300 },
  { id: 4, age: 23, qty: 1100, cost: 6400 },
  { id: 5, age: 78, qty: 1400, cost: 4000 },
]

const columns = [
  {
    dataField: "id",
    text: "ID",
  },
  {
    dataField: "age",
    text: "Age(AutoFill)",
  },
  {
    dataField: "qty",
    text: "Qty(AutoFill and Editable)",
  },
  {
    dataField: "cost",
    text: "Cost(Editable)",
  },
]

const EditableTables = (props) => {
  const breadcrumbItems = [
    { title: "Lexa", link: "#" },
    { title: "Tables", link: "#" },
    { title: "Editable Table", link: "#" },
  ]

  useEffect(() => {
    props.setBreadcrumbItems('Editable Table', breadcrumbItems)
  })

  return (
    <React.Fragment>

      <MetaTags>
        <title>Editable Table | Lexa - Responsive Bootstrap 5 Admin Dashboard</title>
      </MetaTags>

      <Row>
        <Col>
          <Card>
            <CardBody>
              <CardTitle className="h4">Datatable Editable </CardTitle>

              <div className="table-responsive">
                <BootstrapTable
                  keyField="id"
                  data={products}
                  columns={columns}
                  cellEdit={cellEditFactory({ mode: "click" })}
                />
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>

    </React.Fragment>
  )
}

export default connect(null, { setBreadcrumbItems })(EditableTables);
