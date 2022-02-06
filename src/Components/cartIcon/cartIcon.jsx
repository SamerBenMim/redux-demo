import { Link } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';

const CartIcon = ({totalQuantity}) => {//from redux
  return <div style={{position:"absolute",right:"20px",top:"20px"}}>
     
        <Link to="/cart">
      <i className="fa fa-shopping-cart"></i>
      <span className="badge badge-danger">
         { totalQuantity }
      </span>
        </Link>
  </div>;
};

const mapStateToProps = (state)=>{ // data that we need from the central state
  return {
    totalQuantity:state.cartReducer.reduce((total,el)=>total*1 + el.quantity*1,0)
  }
}

export default connect(mapStateToProps)(CartIcon);
