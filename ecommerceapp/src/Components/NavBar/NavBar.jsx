import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useSelector } from 'react-redux'


import Cart from '../Cart/Cart';
import "./NavBar.scss";
const NavBar = () => {
    const [open, setOpen] = useState(false)
    const products = useSelector(state => state.cart.products)
    const cartQuantity = products.length

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
                    <div className="item"><Link className="link" to="/admin">ADMIN PAGE</Link></div>
                    <div className="icons">
                        <SearchIcon />
                        <PersonOutlineOutlinedIcon />
                        <FavoriteBorderOutlinedIcon />
                        <div className="cartIcon" onClick={()=>setOpen(!open) }>
                            <ShoppingCartOutlinedIcon />
                            <span>{cartQuantity}</span>
                        </div>
                    </div>
                 </div>
            </div>
            {open && <Cart/>}
        </div>

    )
}
export default NavBar