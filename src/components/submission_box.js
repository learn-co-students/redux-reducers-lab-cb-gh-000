import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addIngredient } from '../actions';

class SubmissionBox extends Component {
  constructor(props) {
    super(props);

    this.state = { ingredient: '' };

  }

  handleChange(event) {
    this.setState({ ingredient: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addIngredient(this.state.ingredient);
    this.setState({ ingredient: '' });
  }

  render() {
    return (
      <form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>
        <h4>Add an Ingredient</h4>
        <input
          className="form-group text"
          value={this.state.ingredient}
          onChange={this.handleChange.bind(this)}
        />
        <div>
          <button className="btn btn-default btn-success" action="submit">
            Add Ingredient
          </button>
        </div>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addIngredient }, dispatch);
}

export default connect(null, mapDispatchToProps)(SubmissionBox);
