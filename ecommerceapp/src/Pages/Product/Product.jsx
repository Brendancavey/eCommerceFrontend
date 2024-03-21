import React from 'react'
import { useState } from 'react'
import "./Product.scss"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';


const Product = () => {
    const [selectedImg, setSelectedImg] = useState(0)
    const [quantity, setQuantity] = useState(1)
    const images = [
        "https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1356271/pexels-photo-1356271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ];
    return (
        <div className='product'>
            <div className='left'>
                <div className="images">
                    <img src={images[0]} alt="" onClick={() => setSelectedImg(0)} />
                    <img src={images[1]} alt="" onClick={() => setSelectedImg(1)} />
                </div>
                <div className="mainImg">
                    <img src={images[selectedImg]} alt=""/>

                </div>
            </div>
            <div className='right'>
                <h1>Title</h1>
                <span className='price'>$30</span>
                <p>
                    Description of the item! This description can be long enough to wrap around and still have ample space for the web page to look nice.
                </p>
                <div className='quantity'>
                    <button onClick={()=> setQuantity(prev=>prev===1? 1 : prev-1)}>-</button>
                    {quantity}
                    <button onClick={() => setQuantity(prev=>prev+1)}>+</button>
                </div>
                <button className='addToCart'>
                    <AddShoppingCartIcon/> ADD TO CART
                </button>
                <div className='links'>
                    <div className='item'>
                        <FavoriteBorderIcon/> ADD TO WISH LIST
                    </div>
                    <div className='item'>
                        <BalanceIcon /> ADD TO TO COMPARE
                    </div>
                </div>
                <div className='info'>
                    <span>Vendor: Polo</span>
                    <span>Product Type: T-Shirt</span>
                    <span>Tag: T-Shirt, Men, Top</span>
                </div>
                <hr />
                <div className='info'>
                    <span>DESCRIPTION</span>
                    <hr />
                    <span>ADDITIONAL INFORMATION</span>
                    <hr />
                    <span>FAQ</span>
                </div>
            </div>
        </div>
    )
}
export default Product