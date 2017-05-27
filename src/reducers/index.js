export default function ingredientReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_INGREDIENT':
      return [...state, action.payload]

    case 'REMOVE_INGREDIENT':
      let ingredientIndex = state.indexOf(action.payload)
      return  [...state.slice(0, ingredientIndex), ...state.slice(ingredientIndex + 1)]
   }


  return state;
}
