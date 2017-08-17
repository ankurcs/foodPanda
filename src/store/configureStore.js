import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
//import createLogger from 'redux-logger';

//const logger = {};
/*const logger = createLogger({
  level: 'info',
  collapsed: false
});*/

const createStoreWithMiddleware = applyMiddleware(
  //thunk, logger
  thunk
)(createStore);

export default function configureStore (initialState) {
  return createStoreWithMiddleware(reducer, initialState);
}
