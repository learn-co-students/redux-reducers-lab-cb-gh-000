export default function ingredientReducer(state = [], action) {
	switch (action.type) {
		case 'ADD_INGREDIENT':
			return [...state, action.payload]
		case 'REMOVE_INGREDIENT':
			if(isNaN(action.payload)) {
				return state.filter(ingredient => ingredient !== action.payload);
			}
			else {
				state.splice(action.payload, 1);
				return state;
			}
		default:
			return state;
	}
}
