import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { apidata } from "../../components/Charts/data";
import { NavigationBar } from "../../components/NavigationBar";
import { Sidebar } from "../../components/Sidebar";
export const Items = () => {
  return (
    <div className="wrapper">
      <Sidebar />
      <div style={{ width: "100%" }}>
        <NavigationBar />
        <Container>
          <Row>
            <Col md={12} className="mt-4">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Customer Name</th>
                    <th>Product</th>
                    <th>District</th>
                    <th>Customer Work area</th>
                    <th>Order Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {apidata.map((data) => (
                    <tr>
                      <td>{data.date}</td>
                      <td>{data.customer_name}</td>
                      <td>{data.product}</td>
                      <td>{data.district}</td>
                      <td>{data.customer_work_area}</td>
                      <td>{data.order_quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
