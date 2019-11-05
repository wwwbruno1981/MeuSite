import React from 'react';
import Header from '../Header/Header.js'
import bg4 from '../Image/bg4.png'
import bg1 from '../Image/bg1.png'
import bg from '../Image/bg.png'

import './Home.css'

import {
    CardImg, CardBody,
    CardSubtitle, 
    Row, 
    Col, 
    Button, 
    Card,  
    
    CardTitle,
    CardText,
    } from 'reactstrap';
import {Link} from 'react-router-dom'

export default function Home() {
    return( 
    <div> <Header />
        <div className="container">
<Row>
        <Col >
        <Card className="galeria">
        <CardImg className="foto" top width="100%" src={bg} alt="Card image cap1" />
        <CardImg className="foto" top width="100%" src={bg1} alt="Card image cap2" />
        <CardImg className="foto" top width="100%" src={bg4} alt="Card image cap3" />  
        <CardImg className="foto" top width="100%" src={bg1} alt="Card image cap4" />
              
      </Card>

       </Col>
      </Row>
     
            
             </div>

                               
                                
             
             </div>
    )
}