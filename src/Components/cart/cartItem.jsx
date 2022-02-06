import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { removeFromCart } from '../../redux/actions/actions';
import { connect } from 'react-redux';
 function CardItem({name,price,id,quantity,removeFromCart}) {
  return (
    <Card sx={{ maxWidth: 150}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="100"
        image="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          key : {id}
          <br />
          price : {price} $
          <br />

          quantity : {quantity}

          <br />
          <p>total : {quantity*price}$</p>
              
        </Typography>
      </CardContent>
      <CardActions>
      

      <button className='btn btn-danger' onClick={()=>{
      removeFromCart(name)
      }}>
          <i className="fa fa-trash"></i>
          Delete</button>

      </CardActions>
    </Card>
  );
}

const mapDispatchToProps = (dispatch)=>{
  return{
    removeFromCart : (name)=>{ dispatch (removeFromCart(name)) }
  }
}

export default connect(null,mapDispatchToProps)(CardItem)