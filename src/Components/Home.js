import React from 'react'
import Header from './Header';
import ProductList from './ProductList';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartList from './CartList';
import toast from "react-hot-toast";


function Home() {
  const [product, setProduct] = useState([
    {
      url: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/0/e/tr:w-270,/0e1b202NYFLAV0004175_1.jpg?rnd=20200526195200',
      name: 'Lavie',
      category: 'Bag',
      description: "Women's Betula Medium Tote Bag | Ladies Purse Handbag",
      price: 999
    },
    {
      url: 'https://m.media-amazon.com/images/I/71ekeVXVBbL._AC_UY1000_.jpg',
      name: 'Fostelo',
      category: 'Bag',
      description: "Fostelo Women's Style Diva Faux Leather Handbag (Large)",
      price: 599
    },
    {
      url: 'https://legalbribe.in/wp-content/uploads/2023/02/IMG_9167.jpg',
      name: 'Legal Bribe',
      category: 'Bag',
      description: "Legal Bribe - LB1067 Women's Shoulder Bag",
      price: 993
    },
    {
      url: 'https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/8376999/2022/7/13/88f9f214-664f-4ebe-8676-0a306efbe6b11657702306426-Lino-Perros-Off-White-Quilted-Handheld-Bag-1691657702305546-1.jpg',
      name: 'Lino Perros',
      category: 'Bag',
      description: "Lino Perros Womens Synthetic Leather Satchel",
      price: 958
    },
    {
      url: 'https://5.imimg.com/data5/SELLER/Default/2023/8/334566068/IY/HS/SI/62552289/whatsapp-image-2023-08-13-at-1-40-28-pm-1.jpeg',
      name: 'Lavie',
      category: 'Bag',
      description: "Women's Betula Medium Tote Bag | Ladies Purse Handbag",
      price: 999
    },
    {
      url: 'https://images-na.ssl-images-amazon.com/images/I/417PsjAihZL.jpg',
      name: 'Fostelo',
      category: 'Bag',
      description: "Fostelo Women's Style Diva Faux Leather Handbag (Large)",
      price: 749
    }
  ])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart=(data)=>{
    
    setCart([...cart, {...data, quantity: 1}])
    toast.success('Added to cart');
  }
   
  
  const handleShow =(value) =>{
    setShowCart(value)
  }

  return (
    <>
    <Header count={cart.length} handleShow={handleShow}></Header>
    {
    showCart ?
    <CartList cart={cart} setCartlist={setCart}></CartList> :
    <ProductList product={product} addToCart={addToCart}></ProductList>
    
    }
    </>
  );
}

export default Home;