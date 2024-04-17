import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import LogoutLink from "../../Components/LogoutLink/LogoutLink"
import { AuthRequestOptions } from '../../Constants/AuthConstants';
import { setUserFirstName } from "../../Redux/userReducer";
import { useDispatch } from 'react-redux';
import { addToCart, setItemQuantity } from "../../Redux/cartReducer";


import Cart from '../Cart/Cart';
import "./NavBar.scss";
const NavBar = () => {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector(state => state.user.isLoggedIn)
    const userFirstName = useSelector(state => state.user.firstName)
    const [cartOpen, setOpen] = useState(false)
    const products = useSelector(state => state.cart.products)
    const cartQuantity = products.length
    const [cartProductIdsMap, setCartProductIdsMap] = useState() //contains [productId : productQuantity]
    const [retrievedCartItems, setRetrievedCartItems] = useState(false)

    useEffect(() => {
        if (isLoggedIn) {
            getProductData(cartProductIdsMap)
        }
    }, [cartProductIdsMap])
    useEffect(() => {
        setOpen(true)
    }, [cartQuantity])
    useEffect(() => { 
        if (isLoggedIn && !retrievedCartItems) {
            getUserCart()
        }
        else {
            console.log("not logged in to get cart")
        }
        setOpen(false) //setOpen to false upon initial render because reactjs detects a change in cartQuantity upon initial render

        //Only save user firstname if user is logged in and authorized.
        async function getAuthorizedUserData() {
            const requestOptions = AuthRequestOptions("GET")
            const response = await fetch("/pingauth", requestOptions)
            const data = await response.json()
            if (response.ok) {
                dispatch(setUserFirstName({ firstName: data.firstName })); //save name to user redux state for persistance
            }
        }
        getAuthorizedUserData()
    }, [])
        
    async function getProductData(idsMap) {
        try {
            Object.keys(idsMap).forEach(async id => {
                try {
                    const response = await fetch(`https://localhost:7072/Product/get-by-id/${id}`, {
                        method: 'GET'
                    })
                    const data = await response.json()
                    dispatch(addToCart({
                        id: data.id,
                        title: data.title,
                        description: data.description,
                        price: data.salePrice,
                        //img: image1,
                        //quantity        do not add to quantity, need to set quantity
                    }))
                    dispatch(setItemQuantity({
                        id: data.id,
                        quantity: idsMap[id]
                    }))
                } catch (error) {
                    console.log(error)
                }
            })
        } catch {
            console.log("no product ids to retrieve product data")
        }

    }
    async function getUserCart() {
        try {
            const requestOptions = AuthRequestOptions("GET")
            const response = await fetch("https://localhost:7072/api/ApplicationUser/getcart", requestOptions)
            const data = await response.json()
            setCartProductIdsMap(data);

            if (response.ok) {
                console.log("Successfully retrieved user cart")
                setRetrievedCartItems(true)
            }
            else {
                console.log("Failed to retrieve user cart")
            }

        } catch (error) {
            console.log(error)
        }

    }
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <div className="item">
                        <img src="images/en.png" alt="" />
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <span>USD</span>
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/1">Dog Toys</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/2">Dogs</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/3">Dog Food</Link>
                    </div>
                </div> 
                <div className="center">
                    <div>
                        <Link className="link" to="/">DOGGY STORE</Link>
                    </div>
                </div>
                <div className="right">
                    <div className="item"><Link className="link" to="/">Homepage</Link></div>
                    <div className="item"><Link className="link" to="/">About</Link></div>
                    <div className="item"><Link className="link" to="/">Contact</Link></div>
                    <div className="item"><Link className="link" to="/">Stores</Link></div>
                    <div className="icons">
                        <span>
                        {isLoggedIn && <Link to="/useraccount">
                            <h3>Hello {userFirstName}</h3>
                        </Link>}
                        <LogoutLink >
                            Logout
                        </LogoutLink>
                            
                        </span>
                        {isLoggedIn===false && <Link className="link" to="/useraccount">
                            <PersonOutlineOutlinedIcon />
                        </Link>} 
                        <FavoriteBorderOutlinedIcon />
                        <div className="cartIcon" onClick={()=>setOpen(!cartOpen) }>
                            <ShoppingCartOutlinedIcon />
                            <span>{cartQuantity}</span>
                        </div>
                    </div>
                 </div>
            </div>
            {cartOpen && <Cart/>}
        </div>

    )
}
export default NavBar