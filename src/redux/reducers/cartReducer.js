import cart from "../../Components/cart/cart";
import  {ADD_TO_CART} from "../actions/actionTypes"
import  {REMOVE_FROM_CART} from "../actions/actionTypes"

 const loadState=()=>{
    try{
        const state = localStorage.getItem('cart');
        console.log(state);
        if(state){
            return  JSON.parse(state) //state saved in local storage
                
            }
    }
    catch(e){
        console.log(e);
    }
    return []
    
    }


export  function cartReducer( state=loadState()  ,action){
    console.log(localStorage.getItem('cart'));
    let tmp=[]
switch (action.type){
    case ADD_TO_CART:{
        console.log(state);
       var pos =  state.findIndex((el)=> { console.log(el.product.name); return el.product.name=== action.productInfo.name})
        if(pos!=-1) {
            console.log("includes");
             tmp= [...state] 
             tmp[pos].quantity = (tmp[pos].quantity)*1+ action.quantity*1
        console.log(tmp);

           
            return tmp
        }           
       
        else
        return[
                ...state,
                {
                    product:action.productInfo,
                    quantity:action.quantity
                }
            ]
        
        }
    case REMOVE_FROM_CART : {
        tmp= [...state] 
        console.log(tmp,"tmp");
        console.log(action.name,"name");
          if(tmp.findIndex((el)=> { console.log(el.product.name,"el name"); return el.product.name === action.name})!= -1)
          tmp.splice(tmp.findIndex((el)=> {  return el.product.name=== action.name}),1)
        return tmp
    } 


    default : {
        if(!state) return []
        return state;
    }
}
}


