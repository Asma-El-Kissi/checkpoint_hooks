import React, {useState} from 'react'
import {Modal, Button, Form, Col, Row} from 'react-bootstrap'
import StarRatingComponent from 'react-star-rating-component';

export const Add = ({show, handleClose, addMovie}) => {
  const {newMovie,setNewMovie}=useState({
    title:"",
    rate:1,
    // genre:"",
    description:"",
    posterUrl:"",
    ficheTechnique:"",
  })
  const onStarClick=(nextValue, prevValue, name)=> {
    setNewMovie({...newMovie,rate:nextValue})
  }
  const handleChange=(e)=>{
    setNewMovie({...newMovie,[e.target.name]:e.target.value})
  }
  return (
    <div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Title</Form.Label>
      <Form.Control type="text" placeholder="Enter Title" onChange={handleChange} name="title"/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Image URL</Form.Label>
      <Form.Control type="text" placeholder="Image URL" onChange={handleChange} name="posterUrl"/>
    </Form.Group>
  </Row>
  {/* <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={newMovie.rate}
          onStarClick={onStarClick}
         /> */}
  <Form.Group controlId="exampleForm.Controltextarea1">
    <Form.Label>Description</Form.Label>
    <Form.Control as="textarea" rows={3} onChange={handleChange} name="description"/>
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>ficheTechnique</Form.Label>
      <Form.Control onChange={handleChange} name="ficheTechnique"/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Genre</Form.Label>
      <Form.Select defaultValue="Choose Genre" onChange={handleChange} name="genre">
        <option>Comedie</option>
        <option>Musical</option>
        <option>Science fiction</option>
        <option>Detective</option>
      </Form.Select>
    </Form.Group>
  </Row>
</Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{ addMovie(newMovie);handleClose()}}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
export default Add