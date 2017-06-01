export default function ingredientReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_INGREDIENT':
      return [...state, action.payload]
      break
    case 'REMOVE_INGREDIENT':
      // In case that payload specifies Index instead of the ingradient...
      // let newIngredients = [...state]
      // newIngredients.splice(action.payload, 1)
      // return newIngredients

      // Return true to keep the element, false to remove. Keep different ones to the specified.
      return state.filter(ingredient => {
        let keep = ingredient !== action.payload
        return keep
      })
      break
    default:
      return state
  }
}
