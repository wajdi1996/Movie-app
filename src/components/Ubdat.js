import React from 'react'
import {Button,Modal,Form}from 'react-bootstrap'
import {useState} from 'react'
import axios from 'axios';


// pour recupere la valeur
function Ubdat({id,movie}) {
    
    const [Inputtt,setInputtt]=useState(
        {   
            title:movie[id].title,
            genres:movie[id].genres,
            director:movie[id].director,
            runtime:movie[id].runtime,
            posterUrl:movie[id].posterUrl
        }
    )
// pour la changement du valeur 
    const handleChangee=(e)=>{
        const {name,value}=e.target;
        setInputtt(
            {
                ...Inputtt,[name]:value
            }
        );
        console.log(Inputtt)
    }
//pour la modificaton du row 
    const updatRow=(id)=> {

        axios.put(`https://react-crud-ddca5-default-rtdb.firebaseio.com/posts/${id}.json`, Inputtt)
        .then(response => {
          setInputtt( response.data);})
      }
      console.log('updaaaaaate',  Inputtt)

      // useEffect(()=> {updatRow()
      // },[]   )

        
//fin recuperation    

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <div>
             <>
      <p onClick={handleShow} >    <i className="fas fa-edit btn-crud"></i>  </p>
    

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            { /*----------FormModal---------*/ }
            <Form >
                <Form.Group controlId="formGroupTexte">
                    <Form.Label>Title</Form.Label>
                    <Form.Control 
                      type="texte" 
                      defaultValue={movie[id].title}
                      placeholder="enter texte" 
                      onChange={handleChangee} 
                      value={Inputtt.title} 
                      name="title"  
                    />
                </Form.Group>
                <Form.Group controlId="formGroupTexte">
                    <Form.Label>Geners</Form.Label>
                    <Form.Control 
                    type="texte" 
                    defaultValue={movie[id].genres}  
                    placeholder="enter texte"  
                    onChange={handleChangee} 
                    value={Inputtt.genres} 
                    name="genres"  
                    />
                </Form.Group>
                <Form.Group controlId="formGroupTexte">
                    <Form.Label>Director</Form.Label>
                    <Form.Control 
                      type="texte" 
                      defaultValue={movie[id].director}  
                      placeholder="enter texte" 
                      onChange={handleChangee} 
                      value={Inputtt.director} 
                      name="director" 
                      />
                </Form.Group>
                <Form.Group controlId="formGroupTexte">
                    <Form.Label>Runtime</Form.Label>
                    <Form.Control 
                      type="texte" 
                      defaultValue={movie[id].runtime}  
                      placeholder="enter texte" 
                      onChange={handleChangee} 
                      value={Inputtt.runtime} 
                      name="runtime"  
                      />
                </Form.Group>
                <Form.Group controlId="formGroupTexte">
                    <Form.Label>PosteUrl</Form.Label>
                    <Form.Control 
                      type="texte" 
                      defaultValue={movie[id].posterUrl}  
                      placeholder="enter texte" 
                      onChange={handleChangee} 
                      value={Inputtt.posterUrl} 
                      name="posterUrl" 
                      />
                </Form.Group>
                 {/* <Button variant="primary" type="submit" >
                   Submit
                 </Button> */}
                </Form>
            {/*---------------*/ }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleClose} variant="primary" onClick={() =>updatRow(id)}>
            Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
        </div>
    )
}
export default Ubdat ;