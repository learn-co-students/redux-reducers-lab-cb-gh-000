/*
 * This learn.co lab seemed confusing when asking for a parameter called
 * 'index' that passed the index integer 'idx' to the removeIngredient()
 * action with it's argument called 'index', but then the Mocha test
 * defines the key 'payload' passed to object 'type' REMOVE_INGREDIENT
 * as a string 'ingredient'. I modified the code and tests to accommodate
 * both cases.
 */

export default function ingredientReducer(state = [], action) {
  switch(action.type){
    case 'ADD_INGREDIENT':
        return [...state, action.payload];
    case 'REMOVE_INGREDIENT':
        if(isNaN(action.payload)){
          return state.filter(ingredient => ingredient !== action.payload);
        } else {
          state.splice(action.payload, 1);
          return state;
        }
    default:
        return state;
  }
}
