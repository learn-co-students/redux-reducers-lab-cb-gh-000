import expect from 'expect';

import ingredientReducer from '../src/reducers/index';



describe('ingredient reducer', () => {
    it('can handle unknown actions', () => {
      expect(ingredientReducer(undefined, [])).toEqual([]);
    })

    it('handles ADD_INGREDIENT action', () => {
      const action = { type: 'ADD_INGREDIENT', payload: 'grapes' }
      expect(ingredientReducer([], action)).toEqual(['grapes']);
    })

    it('handles REMOVE_INGREDIENT action', () => {
      const action = { type: 'REMOVE_INGREDIENT', payload: 'cheese'}
      expect(ingredientReducer(['milk', 'cheese', 'eggs'], action)).toEqual(['milk', 'eggs'])
    })

    it('handles REMOVE_INGREDIENT action', () => {
      const action = { type: 'REMOVE_INGREDIENT', payload: 1 }
      expect(ingredientReducer(['ham', 'bacon', 'bread'], action)).toEqual(['ham', 'bread'])
    })
})
