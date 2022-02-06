import React from 'react';
import CardItem from './cartItem';
import { connect } from 'react-redux';

const Cart = ({total,items}) => { //from redux init State
  return <div >
      <div style={{display:'flex'}}>
          
{items.map((el)=><CardItem  name={el.product.name} quantity={el.quantity} price={el.product.price} id = {el.product.id}  />
) }
</div>
<br />
<br />

<h2>total :{total}$
</h2>
<br />
<br />

<button className='btn btn-primary btn-block '>pay</button>
  </div>;
};

const mapStateToProps=(state)=>{
    return {
        total:state.cartReducer.reduce((total,el)=>total+el.product.price*el.quantity,0),
        items: state.cartReducer
    }
}


export default connect(mapStateToProps)(Cart);
