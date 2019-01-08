import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";

class Foot extends React.Component {
  render() {
    return (
    <Footer color="black" className="font-small pt-3 mt-2" style={{backgroundColor: 'black !important'}}>
      <Container fluid className="text-center text-md-left" style={{display: 'flex', justifyContent: 'center'}}>
        <Row style={{display: 'flex', justifyContent: 'center'}}>
          <Col md="1" style={{margin: '0 30px'}}>
            <a href="#" style={{textDecoration: 'none', color: 'grey'}}>About</a>
          </Col>
          <Col md="1" style={{margin: '0 30px'}}>
            <a href="#" style={{textDecoration: 'none', color: 'grey'}}>T&C</a>
          </Col>
          <Col md="1" style={{margin: '0 30px'}}>
            <a href="#" style={{textDecoration: 'none', color: 'grey'}}>Privacy</a>
          </Col>
          <Col md="1" style={{margin: '0 30px'}}>
            <a href="#" style={{textDecoration: 'none', color: 'grey'}}>Contact</a>
          </Col>
        </Row>
      </Container>
      <div className="footer-copyright text-center py-2">
        <Container fluid style={{color: 'grey', fontSize: '12px'}}>
          &copy; {new Date().getFullYear()}
          <a href="https://localhost:3000" style={{textDecoration: 'none', color: '#FC473F', fontSize: '12px'}}> Rentivate </a>
        </Container>
      </div>
    </Footer>
    );
  }
}

export default Foot;
