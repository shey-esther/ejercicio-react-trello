import createStore from 'redux-zero'

const initialState = {
    food: SUSHI,
    foodUser: [],
    selectedItem : -1,
    
}

const store = createStore(initialState)
export default store