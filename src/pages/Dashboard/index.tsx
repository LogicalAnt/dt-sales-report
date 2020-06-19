import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavigationBar } from "../../components/NavigationBar";
import { Sidebar } from "../../components/Sidebar";
import "./styles/index.css";
export const Dashboard = () => {
  return (
    <div className="wrapper">
      <Sidebar />
      <div style={{ width: "100%" }}>
        <NavigationBar />
        <Container>
          <Row>
            <Col md={12}>
              <main id="content">
                <h1 className="page-header">Homepage</h1>
              </main>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
