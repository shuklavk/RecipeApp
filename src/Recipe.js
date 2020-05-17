import React from 'react';
import { Modal } from 'react-bootstrap';
import IngredientList from './IngredientList';

export default ({ arrOfIngredients, arrOfInstructions, recipeName }) => {
  const instructionList = arrOfInstructions.map(inst => {
    return <li>{inst}</li>;
  });

  return (
    <div>
      <Modal.Header closeButton>
        <Modal.Title style={{ fontWeight: 600 }}>{recipeName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>
          <u>Ingredients</u>
        </h4>
        <IngredientList arrOfIngredients={arrOfIngredients} />
        <h4>
          <u>Instructions</u>
        </h4>
        <ol>{instructionList}</ol>
      </Modal.Body>
    </div>
  );
};
