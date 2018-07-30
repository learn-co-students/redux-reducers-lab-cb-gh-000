//import {ADD_INGREDIENT} from './types'
//import {REMOVE_INGREDIENT} from './types'

export function addIngredient(ingredient) {
  return {
    type: 'ADD_INGREDIENT',
    payload: ingredient
  }
}
export function removeIngredient(index) {
  return {
    type: 'REMOVE_INGREDIENT',
    payload: index
  }
}
