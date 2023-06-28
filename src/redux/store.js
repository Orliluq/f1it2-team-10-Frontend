import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducer/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancer = composeWithDevTools || compose;

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))
);

export default store;
