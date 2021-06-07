import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

//Reducers
import { cartReducer } from "./reducers/cartReducers";
import {
  getProductDetailsReducer,
  getProductsReducer,
} from "./reducers/productReducers";


const reducer = combineReducers({
  cart: cartReducer,
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
});

/* thunk is a middleware; it's helps us to make asyncronous request in our actions 
witch we can do otherwise with redux */
const middleware = [thunk];

const store = createStore(
  reducer,
  /* instead of spread the middleware in applyMiddleware(...middleware),
  we can just pass thunk; */
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store; // next => go to index.js to connect the application to the store
