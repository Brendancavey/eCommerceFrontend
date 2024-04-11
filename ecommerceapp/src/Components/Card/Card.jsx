import React from 'react'
import './Card.scss'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import fetchImage from "../../UtilityFunctions/fetchImage";
import fetchImage2 from "../../UtilityFunctions/fetchImage2";
import { useSelector } from 'react-redux'
import { AuthRequestOptions } from '../../Constants/AuthConstants';

const Card = ({ item }) => {

    const userRole = useSelector(state => state.user.role)
    const [image, setImage1] = useState()
    const [image2, setImage2] = useState()
    useEffect(() => {
        async function fetchImageData(id) {
            const imageUrl = await fetchImage(id);
            setImage1(imageUrl)
        }
        async function fetchImageData2(id) {
            const imageUrl = await fetchImage2(id);
            setImage2(imageUrl)
        }
        fetchImageData(item.id)
        fetchImageData2(item.id)
    }, [])
    const requestOptions = AuthRequestOptions('DELETE')
    async function handleClickDelete(id) {
        const response = await fetch(`https://localhost:7072/Product/deleteProduct/${id}`, requestOptions)
        if (response.ok) {
            console.log("success")
            window.location.reload(); //refresh page to rerender products list
        } else {
            console.log("fail")
        }
    }
    return (
        <div>
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
            {userRole === 'Admin' && <Link to={`/edit/${item.id}`}>Edit</Link>}
            {userRole === 'Admin' && <button onClick={() => handleClickDelete(item.id)}>Delete</button>}
        </div>
    )
}
export default Card