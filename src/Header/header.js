import React from 'react';
import './header.css';
import {NavLink} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Header = () => {
    return (
      
      <div className="Head">
        


        <Container>
         
        <Row>

        <Col md={2} className="logo">
        <NavLink to="#">LOGO</NavLink>
        </Col>
          
          <Col md={10} className="menu">
            <ul className="list_menu">
              <li> <NavLink to="/gdtickets">ЖД Билеты</NavLink></li>
              <li> <NavLink to="/bustickets">Автобусы</NavLink></li>
              <li> <NavLink to="/airtickets">Авиабилеты</NavLink></li>
              <li> <NavLink to="/test">test</NavLink></li>
            </ul>
          </Col>



            </Row>
        
            </Container>
      </div>
    );
  }

  export default Header;