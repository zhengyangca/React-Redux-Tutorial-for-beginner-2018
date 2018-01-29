import {createStore, combineReducers} from 'redux'
// import CountReducer from './reducers/CountReducer'
import reducer from './reducers/index'

const store = createStore(reducer);

export default store;
