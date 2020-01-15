import React from 'react';
import '../commomstylecontent.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Name from '../Test/Name/name';
import Message from '../Test/Message/message';
import Userid from '../Test/iduser/iduser.js';
import Avauser from '../Test/avauser/avauser.js';



const Test = (props) => {

    let nameusers = [
        {id: 'Mihail', name: 'Mihail'},
        {id: 'Alex', name: 'Alex'},
        {id: 'Roma', name: 'Roma'}
    ]

    let messages = [
        {message: 'Сообщение от Михаила'},
        {message: 'Сообщение от Алексея'},
        {message: 'Сообщение от Романа'}
    ]

    let userid = [
        {id: '3345'},
        {id: '5467'},
        {id: '1278'}
    ]

    let avausers = [
        {ava: ''},
        {ava: ''},
        {ava: ''}
    ]

   

    let nameelEmentsmass = nameusers
        .map (n => <Name name={n.name} id={n.id} />);

    let messageElementsmass =  messages
        .map (m => <Message message={m.message} />);

    let useridelement =  userid
        .map (u => <Userid id={u.id} />);
    
    let avauserelement =  avausers
        .map (a => <Avauser/>);

    return (
      
            
        
          <Container className="form_block">

              <Row>

              <Col md={3}>
                  <p>ID User</p>
                {useridelement}
              </Col>

              <Col md={3}>
              <p>Photo User</p>
              {avauserelement}
                
              </Col>

              <Col md={3}>
              <p>Name User</p>
                {nameelEmentsmass}
              </Col>

              <Col md={3}>
              <p>Message User</p>
                {messageElementsmass}
              </Col>

              </Row>

          </Container>

      
      
    );
  }

  export default Test;