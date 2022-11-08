import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({addPoke}) {
  const [ name,setName]=useState('')
  const [ hp,setHP]=useState('')
  const [ front,setFront]=useState('')
  const [ back,setBack]=useState('')
  function handleNameChange(e){
    setName(e.target.value)
  }
  function handleHpChange(e){
    setHP(e.target.value)
  }
  function handleFrontChange(e){
    setFront(e.target.value)
  }
  function handleBackChange(e){
    setBack(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newPoke = {
      name: name,
      hp: hp,
      sprites: {
        front: front,
        back: back
      }
    } 
    addPoke(newPoke);
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input value = {name} onChange ={handleNameChange}fluid label="Name" placeholder="Name" name="name" />
          <Form.Input value = {hp} onChange ={handleHpChange} fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value = {front} 
            onChange ={handleFrontChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value = {back} 
            onChange ={handleBackChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
