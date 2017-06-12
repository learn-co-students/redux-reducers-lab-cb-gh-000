import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { removeIngredient } from '../actions';
import Ingredient from './ingredient';

class IngredientList extends Component {
  constructor(props) {
    super(props);
  }

  handleClick(index) {
    this.props.removeIngredient(index);
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.ingredients.map((ingredient, idx) =>
            (
              <Ingredient
                ingredient={ingredient}
                key={idx}
                onIngredientClick={this.handleClick.bind(this, idx)}
              />
            )
          )}
        </ul>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ removeIngredient }, dispatch);
}

function mapStateToProps(state) {
  return { ingredients: state };
}

export default connect(mapStateToProps, mapDispatchToProps)(IngredientList);
