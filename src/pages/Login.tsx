import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import BackgroundParticles from "../components/BackgroundParticles";
import Card from "react-bootstrap/esm/Card";
import Form from "react-bootstrap/esm/Form";
import Button from "react-bootstrap/esm/Button";
import Image from "react-bootstrap/Image";
import CatheterBackground from '.././assets/catheter.jpg';
import Container from "react-bootstrap/esm/Container";

function Login() {
  return (
    <React.Fragment>
      <BackgroundParticles />
      <div className="login-page main-login-card">
        <Container className="h-100 d-flex align-items-center justify-content-center center-screen">
          <Card className="login-card shadow-lg">
            <Row className="g-0 h-100">
              <Col md={5} className="login-form p-5">
                <h2 className="fw-bold mb-2 text-center">MC <i className="bi bi-box-fill" style={{color:"#0f172a"}}></i></h2>
                <p className="text-muted mb-4">
                  Ingrese sus credenciales para ingresar
                </p>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Número de empleado</Form.Label>
                    <Form.Control type="text" placeholder="Número de empleado" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="••••••••" />
                  </Form.Group>
                  <Button className="w-100 login-btn">
                    Entrar
                  </Button>
                  <div className="divider">
                    <span className="divider-text">O</span>
                  </div>
                  <Button className="w-100 login-btn" variant="success" size="sm">
                    Ingresa a BWI
                  </Button>
                  <p className="text-center mt-3 small text-muted">
                    2025 Foxconn Baja California
                    <br />
                    Version 3.0.0
                  </p>
                </Form>
              </Col>
              <Col md={7} className="login-image position-relative">
                <div className="position-relative" style={{ height: "100%", minHeight: "500px" }}>
                  <Image 
                    src={CatheterBackground} 
                    rounded 
                    style={{ 
                      maxHeight: "50rem", 
                      width: "100%", 
                      height: "100%", 
                      objectFit: "cover",
                      opacity: 0.7 
                    }} 
                  />
                  <div 
                    className="position-absolute top-50 start-50 translate-middle text-center text-white p-4"
                    style={{
                      textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                      zIndex: 1
                    }}
                  >
                    <h3 className="fw-bold mb-3" style={{ fontSize: "1.75rem" }}>
                      Master Carthon Platform
                    </h3>
                    <p className="mb-0" style={{ fontSize: "1.1rem", opacity: 0.95 }}>
                      Precisión y cuidado en cada procedimiento
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Card>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Login;