import { getDefaultNormalizer } from '@testing-library/dom';
import React, {useState,useEffect}from 'react'
import { Row,Button } from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'


function Movie ({input,movie,getFavorites,getFavoriteMovie}) {

  
    
  return(
    Object.keys(movie).filter((filtre)=>{
      if (input===""){ 
        return filtre 
       }
       else if (filtre.title.toLowerCase().includes(input.toLowerCase())){
         return filtre
       }
    }).map(el=>
      <div  className='aal-card' >

      <Row className="pb-5">
      <Card style={{ width: '16rem',border:'none',marginBottom:'20px' }}>
      <Card.Img variant="top" src={movie[el].posterUrl} height="300px" style={{borderRadius:'5px'}}/>
    
        <Card.Body>
    <Card.Title className="card-title">{movie[el].title}</Card.Title>
    <Card.Text>
    
    </Card.Text>
    <div className="d-flex justify-content-between">
    <div className="card-text">{movie[el].imdbRating}<i class="fas fa-star ml-1 rating"></i></div>
    
    <div className="heart" onClick={() => {getFavorites() ; getFavoriteMovie(el)}}><i class="fas fa-heart  "></i></div>
    

    </div>
    <div className="d-flex justify-content-center">
    <Rater  total={5} interactive={false} rating={movie[el].imdbRating} />
    </div>
        </Card.Body>
      </Card>
     </Row>
     </div> 


  
   ))

 }

export default Movie