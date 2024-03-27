import React from 'react'
import './Card.scss'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Card = ({ item }) => {
    const [image, setImage] = useState()
    const [image2, setImage2] = useState()
    useEffect(() => {
        getImageData(item.id);
        getImageData2(item.id);
    }, [])
    async function getImageData(id) {
        if (item.img) {
            const response = await fetch(`https://localhost:7072/Product/get-image-by-id/${id}`, {
                method: 'GET'
            });
            const data = await response.blob();
            setImage(URL.createObjectURL(data));
        }
        return null; 
    }
    async function getImageData2(id) {
        if (item.img2) {
            const response = await fetch(`https://localhost:7072/Product/get-image-by-id2/${id}`, {
                method: 'GET'
            });
            const data = await response.blob();
            setImage2(URL.createObjectURL(data));
        }
        return null;
    }
    return (
        <Link className='link' to={`/product/${item.id}`}>
            <div className='card'>
                <div className='image'>
                    {item.isNew && <span>New Item!</span>}
                    <img src={image} alt="" className="mainImg" />
                    <img src={image2} alt="" className="secondImg" />

                </div>
                <h2>{item.title}</h2>
                <div className='prices'>
                    <h3>${item.price}</h3>
                    <h3>${item.salePrice}</h3>
                </div>
            </div>

        </Link >
    )
}
export default Card