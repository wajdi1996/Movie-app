import React from 'react'

import {Card} from 'react-bootstrap';
import axios from 'axios';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

import {Tab,Row,Col,Nav} from 'react-bootstrap';
import Post from './Post';
import Ubdat from './Ubdat';
import {useState,useEffect} from 'react';
import Menu from './navbar';


function Admine ({Inputtt,handleChangee,movie}) {

   const delta = (id) => {
    axios.delete(`https://react-crud-ddca5-default-rtdb.firebaseio.com/posts/${id}.json`)
    .then((response) => {
      console.log(response)
    });
  };


    return (
      
       
      <div>
      <Menu />
        <br/><br/><hr></hr>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col  className="modal-left" sm={4}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first"><i class="fas fa-paste"></i> GetMovies</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second"><i class="fas fa-edit"></i> PostMovies</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col className="modal-righit" sm={8}>
      <Tab.Content>
        <Tab.Pane eventKey="first">

        <div>
       <div className="d-flex justify-content-around flex-wrap">
        {Object.keys(movie).map((id) =>
        <Card style={{ width: '16rem',border:'none',marginBottom:'20px' }}>
           <Card.Img variant="top" src={movie[id].posterUrl} height="300px" style={{borderRadius:'5px'}}/>
      
          <Card.Body>
      <Card.Title className="card-title">{movie[id].title}</Card.Title>
      <Card.Text>
      <div className="d-flex justify-content-around flex-wrap">
        <p onClick={() => delta(id)}>    <i className="fas fa-trash btn-crud "></i>  </p>
        <Ubdat movie={movie} id={id} handleChangee={handleChangee}/>
          </div>
      </Card.Text>
      <div className="d-flex justify-content-between">
      <div className="card-text">{movie[id].imdbRating}<i class="fas fa-star ml-1 rating" ></i></div>
    
      

      </div>
      <div className="d-flex justify-content-center">
      <Rater  total={5} interactive={false} rating={movie[id].imdbRating} />
      </div>
          </Card.Body>
         
          {/* button delete */}
        </Card>
        )}
  </div>
</div>


        </Tab.Pane>
        <Tab.Pane eventKey="second">
            <Post />
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
        </div>



     
    
    )
}

export default Admine ;