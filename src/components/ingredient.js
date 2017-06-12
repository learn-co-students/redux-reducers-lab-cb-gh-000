import React, { Component } from 'react';

const Ingredient = (props) => {
  return (
    <li>
      className="row"
      onClick={props.onIngredientClick}
      {props.ingredient}
    </li>
  );
};

export default Ingredient;
