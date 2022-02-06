import { ADD_TO_CART } from "./actionTypes"
import { REMOVE_FROM_CART} from "./actionTypes"
export function addToCart(productInfo,quantity){ //action creator
    return {
        type :ADD_TO_CART,
        productInfo,
        quantity
    }
}
export function removeFromCart(name){ //action creator
    return {
        type : REMOVE_FROM_CART,
        name 
        
    }
}