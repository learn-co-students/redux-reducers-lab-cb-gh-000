export default function ingredientReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_INGREDIENT':
      const ingredient = action.payload;
      return [...state, ingredient];
    case 'REMOVE_INGREDIENT':
      const index = action.payload;
      return state.filter(item => item !== index );
    default:
      return state;
  }
}
