import React from 'react';
import '../commomstylecontent.css';
import gds from './gdtickets.module.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

const Gdtickets = () => {
    return (
      <div className={gds.content_block}>



        <Container className="form_block">

          <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="tab1">

            <Tab eventKey="home" title="В одну сторону" >
            <Row className="city">
              <Col md={5}>
              <span class="icon_map_tick"><img src="http://s1.iconbird.com/ico/2013/6/280/w512h5121371488614places512.png"/></span>
                <input type="text" placeholder="От куда111" maxLength="40" className="input_insideot"/>
                <ListGroup>
                <ListGroup.Item>Дата ЖД 1</ListGroup.Item>
                <ListGroup.Item>Дата ЖД 1</ListGroup.Item>
                <ListGroup.Item>Дата ЖД 1</ListGroup.Item>
                <ListGroup.Item>Дата ЖД 1</ListGroup.Item>
                <ListGroup.Item>Дата ЖД 1</ListGroup.Item>
              </ListGroup>
              </Col>
              <Col md={1}>
              <img src='data:image/png;base64,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'/>
              </Col>
              <Col md={5}>
              <span class="icon_map_tick"><img src="http://s1.iconbird.com/ico/2013/6/280/w512h5121371488614places512.png"/></span>
              <input type="text" placeholder="Куда111" maxLength="40" className="input_insidekuda"/>
              </Col>
          </Row>
            </Tab>

            <Tab eventKey="profile" title="В обе стороны">
            <Row className="city">
              <Col md={5}>
              <span class="icon_map_tick"><img src="http://s1.iconbird.com/ico/2013/6/280/w512h5121371488614places512.png"/></span>
                <input type="text" placeholder="От куда222" maxLength="40" className="input_insideot"/>
                <ListGroup>
                <ListGroup.Item>Дата ЖД 1</ListGroup.Item>
                <ListGroup.Item>Дата ЖД 1</ListGroup.Item>
                <ListGroup.Item>Дата ЖД 1</ListGroup.Item>
                <ListGroup.Item>Дата ЖД 1</ListGroup.Item>
                <ListGroup.Item>Дата ЖД 1</ListGroup.Item>
              </ListGroup>             
              </Col>
              <Col md={1}>
              <img src='data:image/png;base64,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'/>
              </Col>
              <Col md={5}>
              <span class="icon_map_tick"><img src="http://s1.iconbird.com/ico/2013/6/280/w512h5121371488614places512.png"/></span>
              <input type="text" placeholder="Куда222" maxLength="40" className="input_insidekuda"/>
              <ListGroup>
                <ListGroup.Item>Дата ЖД 2</ListGroup.Item>
                <ListGroup.Item>Дата ЖД 2</ListGroup.Item>
                <ListGroup.Item>Дата ЖД 2</ListGroup.Item>
                <ListGroup.Item>Дата ЖД 2</ListGroup.Item>
                <ListGroup.Item>Дата ЖД 2</ListGroup.Item>
              </ListGroup>
              </Col>
          </Row>
            </Tab>
            
          </Tabs>

        </Container>
      </div>
    );
  }

  export default Gdtickets;