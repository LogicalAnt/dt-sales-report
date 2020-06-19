import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavigationBar } from "../../components/NavigationBar";
import { Sidebar } from "../../components/Sidebar";

export const Customer = () => {
  return (
    <div className="wrapper">
      <Sidebar />
      <div style={{ width: "100%" }}>
        <NavigationBar />
        <Container>
          <Row>
            <Col md={12}>
              <main id="content">
                <p>Customers</p>
              </main>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
