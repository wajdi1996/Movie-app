import React from 'react'
import {Button,Form,Tab,Row,Col,Nav} from 'react-bootstrap';
import {useState} from 'react' 
import axios from 'axios';

function Post() {

const [Input,setInput]=useState(
    {
        title:"",
        genres:"",
        director:"",
        runtime:"",
        posterUrl:""
    }
)
const handleChange=(e)=>{
    const {name,value}=e.target;
    setInput(
        {
            ...Input,[name]:value
    
        }
    );
    console.log(Input)
}

const handleSubmit=(e)=>{
    e.preventDefault()
    console.log('input',Input)
    
    axios.post('https://react-crud-ddca5-default-rtdb.firebaseio.com/posts.json',JSON.stringify(Input)).then((response)=> console.log(response))
    .catch((error)=> console.log('error'))
}
    return (
        <div>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
<Row>
<Col sm={0}>
 
</Col>
<Col sm={12}>
  <Tab.Content>
    
                        <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formGroupTexte">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="texte" placeholder="enter texte" onChange={handleChange} value={Input.title} name="title"  />
                </Form.Group>
                <Form.Group controlId="formGroupTexte">
                    <Form.Label>Geners</Form.Label>
                    <Form.Control type="texte" placeholder="enter texte"  onChange={handleChange} value={Input.genres} name="genres"  />
                </Form.Group>
                <Form.Group controlId="formGroupTexte">
                    <Form.Label>Director</Form.Label>
                    <Form.Control type="texte" placeholder="enter texte" onChange={handleChange} value={Input.director} name="director" />
                </Form.Group>
                <Form.Group controlId="formGroupTexte">
                    <Form.Label>Runtime</Form.Label>
                    <Form.Control type="texte" placeholder="enter texte" onChange={handleChange} value={Input.runtime} name="runtime"  />
                </Form.Group>
                <Form.Group controlId="formGroupTexte">
                    <Form.Label>PosteUrl</Form.Label>
                    <Form.Control type="texte" placeholder="enter texte" onChange={handleChange} value={Input.posterUrl} name="posterUrl" />
                </Form.Group>
                 <Button variant="primary" type="submit">
                   Submit
                 </Button>
                </Form>
    
  </Tab.Content>
</Col>
</Row>
</Tab.Container>
    </div>
    )
}

export default Post ;