import React from 'react';
import {connect} from "react-redux";

const Counter = ({counter,decrement,increment}) => {
  return <div>
      counter : {counter}
      <br />
      <br />
      <button onClick={increment} >+</button>
      <button onClick={decrement}>-</button>
  </div>;
};

const mapStateToProps=(state)=>{  // retourne ce qu on veut de state globale
//  on peut faire du traitement ici sur state.filter
    return {
    counter: state.counterReducer,

}
}

const mapDispatchToProps=(dispatch)=>{
return {
    increment: ()=>dispatch({type:'INCREMENT'}),
    decrement: ()=>dispatch({type:'DECREMENT'}),
}
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);

