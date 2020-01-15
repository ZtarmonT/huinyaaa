import React from 'react';
import '../commomstylecontent.css';
import busst from './bustickets.module.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

const Bustickets = () => {
    return (
      <div className={busst.content_block}>
        
          

          <Container className="form_block">

          <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="tab1">

            <Tab eventKey="home" title="В одну сторону" >
            <Row className="city">
              <Col md={5}>
              <span class="icon_map_tick"><img src="http://s1.iconbird.com/ico/2013/6/280/w512h5121371488614places512.png"/></span>
                <input type="text" placeholder="От куда333" maxLength="40" className="input_insideot"/>
                <ListGroup>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
              </Col>
              <Col md={1}>
              <img src='https://image.flaticon.com/icons/png/512/15/15923.png'/>
              </Col>
              <Col md={5}>
              <span class="icon_map_tick"><img src="http://s1.iconbird.com/ico/2013/6/280/w512h5121371488614places512.png"/></span>
              <input type="text" placeholder="Куда333" maxLength="40" className="input_insidekuda"/>
              </Col>
          </Row>
            </Tab>

            <Tab eventKey="profile" title="В обе стороны">
            <Row className="city">
              <Col md={5}>
              <span class="icon_map_tick"><img src="http://s1.iconbird.com/ico/2013/6/280/w512h5121371488614places512.png"/></span>
                <input type="text" placeholder="От куда444" maxLength="40" className="input_insideot"/>
                <ListGroup>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
              </Col>
              <Col md={1}>
              <img src='https://image.flaticon.com/icons/png/512/15/15923.png'/>
              </Col>
              <Col md={5}>
              <span class="icon_map_tick"><img src="http://s1.iconbird.com/ico/2013/6/280/w512h5121371488614places512.png"/></span>
              <input type="text" placeholder="Куда444" maxLength="40" className="input_insidekuda"/>
              <ListGroup>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
              </Col>
          </Row>
            </Tab>
            
          </Tabs>

          </Container>

      
      </div>
    );
  }

  export default Bustickets;