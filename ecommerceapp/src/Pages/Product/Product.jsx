import React from 'react'
import { useState, useEffect } from 'react'
import "./Product.scss"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import { useParams } from 'react-router-dom'
import fetchImage from "../../UtilityFunctions/fetchImage";
import fetchImage2 from "../../UtilityFunctions/fetchImage2";

const Product = () => {
    const productId = parseInt(useParams().id);
    const [quantity, setQuantity] = useState(1)
    const [item, setItem] = useState({})
    const [image1, setImage1] = useState()
    const [image2, setImage2] = useState()
    const [selectedImg, setSelectedImg] = useState()

    useEffect(() => {
        getProductData(productId);
        async function fetchImageData(id) {
            const imageUrl = await fetchImage(id);
            setImage1(imageUrl)
            setSelectedImg(imageUrl)
        }
        async function fetchImageData2(id) {
            const imageUrl = await fetchImage2(id);
            setImage2(imageUrl)
        }
        fetchImageData(productId)
        fetchImageData2(productId)
    }, [])
    async function getProductData(id) {
        try {
            const response = await fetch(`https://localhost:7072/Product/get-by-id/${id}`, {
                method: 'GET'
            });
            if (response.ok) {
                console.log("Fetched product data successfully")
            }
            const data = await response.json()
            setItem(data);
        } catch (error) {
            console.error("Error fetching product data: ", error)
        } 
    }
    return (
        <div>
            
                <div className='product' key={item.id}>
                    <div className='left'>
                        <div className="images">
                        <img src={image1} alt="" onClick={() => setSelectedImg(image1)} />
                        <img src={image2} alt="" onClick={() => setSelectedImg(image2)} />
                        </div>
                        <div className="mainImg">
                            <img src={selectedImg} alt="" />
                        </div>
                    </div>
                    <div className='right'>
                        <h1>{item.title}</h1>
                        <div className='price'>
                            <span>${item.price}</span>
                            <span>${item.salePrice}</span>
                        </div>
                        <p>
                            {item.description}
                        </p>
                        <div className='quantity'>
                            <button onClick={() => setQuantity(prev => prev === 1 ? 1 : prev - 1)}>-</button>
                            {quantity}
                            <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
                        </div>
                        <button className='addToCart'>
                            <AddShoppingCartIcon /> ADD TO CART
                        </button>
                        <div className='links'>
                            <div className='item'>
                                <FavoriteBorderIcon /> ADD TO WISH LIST
                            </div>
                            <div className='item'>
                                <BalanceIcon /> ADD TO TO COMPARE
                            </div>
                        </div>
                        <div className='info'>
                            <span>Breed: {item.breed}</span>
                            <span>Weight: {item.weight}</span>
                            <span>Tags: Dogs, Pitbull, Husky</span>
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
            
        </div>
    )    
}
export default Product