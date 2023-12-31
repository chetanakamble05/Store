import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../App.css';


export default function ProductList({product, addToCart}) {  
  return (
    <>
      <div className='store'>
      <h1>Welcome to the store!</h1>
      <h6>Checkout all the trends...</h6>
      </div>
      <div className='flex'>
      {
        product.map((productItem, productIndex)=> {
          
            return (
                <div className='card1'>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={productItem.url} className='image'/>
                <Card.Body>
                  <Card.Title>{productItem.name}</Card.Title>
                  <Card.Text>
                    <p>{productItem.description}</p>
                    <p> ₹{productItem.price}</p>
                    </Card.Text>
                  <Button variant="secondary" onClick={()=>addToCart(productItem)}>Add to Cart</Button>
                </Card.Body>
              </Card>
              </div>
                )
        })
      }
    </div>
    </>
  )
}
