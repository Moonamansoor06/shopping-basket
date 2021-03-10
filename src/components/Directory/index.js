import React from "react";
import MenShopping from "./../../assets/Menshopping.jpeg";
import WomenShopping from "./../../assets/Womenshopping.jpeg";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Media from 'react-bootstrap/Media'
//import "./styles.scss";

function Directory(props) {
  
 
 

  return (


    <Container >
  <Row  sm={8}>
    <Col  style={{width:'50%',
      height:'100%'}} > 
            <Media >
              <img 
              width={500}
              height={500}
              className="mr-3"
              src={MenShopping}
              alt="Mens"
              /> 
              </Media>
    </Col>
    
    <Col  style={{width:'50%',
  height:'100%'}} >
    <Media >
              <img 
              width={500}
              height={500}
              className="mr-3"
              src={WomenShopping}
              alt="Womens"
              /> 
              </Media>
      </Col>
  </Row>
  
</Container>
   /*  <div className="directory">
      <div className="wrap">
        <div
          style={{ backgroundImage: `url(${MenShopping})` }}
          className="item"
        >
          <a>Shops Men</a>
        </div>
        <div
          style={{ backgroundImage: `url(${WomenShopping})` }}
          className="item"
        >
          <a>Shops Women</a>
        </div>
      </div>
    </div> */
  );
}

export default Directory;
