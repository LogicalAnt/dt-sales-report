import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import logo from "../../logo.svg";
import { login } from "../../store/actions/auth";
import "./styles/index.css";
export const LoginComponent = ({ loginSubmitter }: any) => {
  let history = useHistory();
  const [loginCredentials, setLoginCredentials] = useState({
    username: "",
    password: "",
  });

  const submitHandler = (e: any) => {
    e.preventDefault();
    console.log("state", loginCredentials);
    loginSubmitter({ loginCredentials, history });
  };

  return (
    <>
      <Container>
        <Row className="justify-content-md-center mt-4">
          <Col md="4">
            <Card style={{ width: "auto" }}>
              <Card.Img variant="top" src={logo} className="loginPageLogo" />
              <Card.Body>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      name="username"
                      placeholder="Enter username"
                      onChange={(e) => {
                        setLoginCredentials({
                          ...loginCredentials,
                          username: e.target.value,
                        });
                      }}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter Password"
                      name="password"
                      onChange={(e) => {
                        setLoginCredentials({
                          ...loginCredentials,
                          password: e.target.value,
                        });
                      }}
                    />
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="submit"
                    onClick={submitHandler}
                  >
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    loginSubmitter: ({ loginCredentials, history }: any) =>
      dispatch(login({ loginCredentials, history })),
  };
};
export const Login = connect(null, mapDispatchToProps)(LoginComponent);
