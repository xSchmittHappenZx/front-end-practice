import {createStore, applyMiddleware, compose} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {indexReducer} from '../reducers/index'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose
const store = createStore(
  indexReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store