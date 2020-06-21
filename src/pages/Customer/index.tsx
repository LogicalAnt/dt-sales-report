import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BarChart } from "../../components/Charts/BarChart";
import { NavigationBar } from "../../components/NavigationBar";
import { Sidebar } from "../../components/Sidebar";
import { barChartData } from "./utils/barchartData";

export const Customer = () => {
  interface BarDataType {
    labels: Array<any>;
    datasets: Array<object>;
  }
  const data: BarDataType = barChartData();
  return (
    <div className="wrapper">
      <Sidebar />
      <div style={{ width: "100%" }}>
        <NavigationBar />
        <Container>
          <Row className="mt-4">
            <Col md={8}>
              <BarChart {...data} />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
