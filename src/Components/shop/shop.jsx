import React,{useEffect,useState} from 'react';
import ImgMediaCard from '../card/card';
import products from '../../products.json';
const Shop = (props) => {

const [Products, setProducts] = useState([]);
useEffect(() => {

setProducts(products)


}, []);


  return (<>
  <h1 style={{display:"flex" ,textAlign:"center", justifyContent:"center"}}>Shop </h1>
  <div style={{display:"flex" , flexWrap:"wrap",justifyContent:"center"}}>
        
        <br />
        <br />
      {
        Products.map(el=> <ImgMediaCard key={el.id} id={el.id} name={el.name} img={el.img} price={el.price}/> )
      }
     
        </div>
  </>
        );
};

export default Shop;
