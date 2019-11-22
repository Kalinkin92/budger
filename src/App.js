import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
// import { Container, Row, Col } from 'reactstrap';
import './App.css';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <Container fliud={true} className="output">
        <h1>1270</h1>
        <p>На сегодня</p>
      </Container>
      {/* <Footer> */}
      <Container fliud={true} id="keyboard">
        <Row >
          <Col >
            <div className="input">
              {/* <div className="p-2"> */}
                <h1 >0</h1>
              {/* </div> */}
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={3} className="nums"><div class="d-inline-flex p-2">1</div></Col>
          <Col xs={3} className="nums"><div class="d-inline-flex p-2">2</div></Col>
          <Col xs={3} className="nums"><div class="d-inline-flex p-2">3</div></Col>
          <Col xs={3} className="nums"><div class="d-inline-flex p-2">{'<'}</div></Col>
        </Row>
        <Row>
          <Col xs={9}>
            <Row>
              <Col className="nums"><div class="d-inline-flex p-2">4</div></Col>
              <Col className="nums"><div class="d-inline-flex p-2">5</div></Col>
              <Col className="nums"><div class="d-inline-flex p-2">6</div></Col>
            </Row>
            <Row>
              <Col className="nums"><div class="d-inline-flex p-2">7</div></Col>
              <Col className="nums"><div class="d-inline-flex p-2">8</div></Col>
              <Col className="nums"><div class="d-inline-flex p-2">9</div></Col>
            </Row>
            <Row>
              <Col className="nums"> 
              <div className="d-inline-flex" >
                <span className="p-2 align-self-center" >0</span>
              </div>
              </Col>
            </Row>
          </Col>
            <Col style={{backgroundColor: 'orange'}}></Col>
        </Row>
      </Container>
      
      {/* </Footer> */}
{/*       
      <footer className="footer">
        <p>Some footer nonsense!</p>
      </footer> */}
    </div>
  );
}

export default App;
