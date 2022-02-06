import React from 'react';
import ImgMediaCard from './card/card';
import { useEffect,useState } from 'react';
import {useParams} from "react-router-dom"
import products from '../products.json';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import classify from 'material/src/component/classify';
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions/actions';

const Product = ({addToCart}) => {
  
  const [Prod, setProd] = useState({});
  const [quantity, setquantity] = useState(0);
    let {id} = useParams()
    useEffect(() => {
      const product = products.find(el => {
        return el.id==id
      })
      setProd(product) 
    }, []);
    
    const handleQuantity= (e)=>{
      if(e.target.value>=0)
      setquantity(e.target.value)
    }
    if (Prod)
  return (
  <div>
     <Card sx={{ maxWidth: 300}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {Prod.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
     
          <br />
          <h1>

          price : {Prod.price} $
          </h1>
          <br />
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        <input type="number" 
        value={quantity} 
       onChange={handleQuantity} 
        />
        <Button onClick={()=>{
          if(quantity)
          addToCart(Prod,quantity)
        }}>add2cart</Button>
      </CardContent>
      <CardActions>
        
      </CardActions>
      total : {Prod.price*quantity}
      
    </Card>
  </div>);
}; 
const mapDispatchToProps=(dispatch)=>{
  return {
      addToCart : (productInfo,quantity)=> dispatch(addToCart(productInfo,quantity))
  }
}
export default connect(null,mapDispatchToProps)(Product);

