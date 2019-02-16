import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

<<<<<<< HEAD
=======

>>>>>>> c2ddcac293ba4a22083a8e97f56c120dbee5f2af
const initialState = {};

const middleware = [thunk];

<<<<<<< HEAD
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //implements react extension
  ) //spread operator
);
=======
const store = createStore(rootReducer,
                            initialState,
                            compose(applyMiddleware(...middleware),
                            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
                            )
                         );

>>>>>>> c2ddcac293ba4a22083a8e97f56c120dbee5f2af
export default store;