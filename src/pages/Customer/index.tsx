import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BarChart } from "../../components/Charts/BarChart";
import { PieChart } from "../../components/Charts/PieChart";
import { NavigationBar } from "../../components/NavigationBar";
import { Sidebar } from "../../components/Sidebar";
import { barChartData } from "./utils/barchartData";
import { pieChartData } from "./utils/piechartData";

export const Customer = () => {
  interface BarDataType {
    labels: Array<any>;
    datasets: Array<object>;
  }
  interface PieDataType {
    labels: Array<any>;
    datasets: Array<object>;
  }
  const bardata: BarDataType = barChartData();
  const piedata: PieDataType = pieChartData();
  return (
    <div className="wrapper">
      <Sidebar />
      <div style={{ width: "100%" }}>
        <NavigationBar />
        <Container>
          <Row className="mt-4">
            <Col md={8}>
              <BarChart {...bardata} />
            </Col>
          </Row>
          <Row>
            <Col md={8} className="text-center">
              <p className="text-muted">Fig: Customer count from districts</p>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col md={8}>
              <PieChart {...piedata} />
            </Col>
          </Row>
          <Row>
            <Col md={8} className="text-center">
              <p className="text-muted">Fig: Customer count from workarea</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
