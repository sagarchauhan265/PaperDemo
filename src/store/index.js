import { createStore  } from 'redux';

import {reducer} from '../Reducer';



// const middleware = applyMiddleware(thunk);

export const store = createStore(reducer);