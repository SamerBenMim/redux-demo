import {createStore,combineReducers} from "redux"
import {counterReducer} from "../reducers/counterReducer"
import {cartReducer} from "../reducers/cartReducer"
 
const rootReducer = combineReducers({
    cartReducer,
    counterReducer
}) 

function saveState(state){
    console.log(state);
    localStorage.setItem('cart',JSON.stringify(state))
}


const store = createStore(rootReducer)

store.subscribe(()=>{
    console.log(store.getState().cartReducer);
    saveState(store.getState().cartReducer)
})


export default store 