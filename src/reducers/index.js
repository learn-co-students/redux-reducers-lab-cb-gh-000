export default function ingredientReducer(state = [], action) {
  switch(action.type){
    case 'ADD_INGREDIENT':
        return Object.assign([], state, [...state, action.payload]);
    case 'REMOVE_INGREDIENT':
        const ingredients = state.splice(action.payload, 1);
        return Object.assign([], state, ingredients);
    default:
        return state;
  }
}
