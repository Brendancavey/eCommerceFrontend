import React from 'react'
import { useState } from 'react'
import "./Products.scss"

const Products = () => {
    const [maxPrice, setMaxPrice] = useState(1000)
    const [sort, setSort] = useState(null)
    return (
        <div className='products'>
            <div className='left'>
                <div className='filterItem'>
                    <h2>Product Categories</h2>
                    <div className='inputItem'>
                        <input type='checkbox' id="1" value={1} />
                        <label htmlFor="1">Shirts</label>
                    </div>
                    <div className='inputItem'>
                        <input type='checkbox' id="2" value={2} />
                        <label htmlFor="2">Pants</label>
                    </div>
                    <div className='inputItem'>
                        <input type='checkbox' id="3" value={3} />
                        <label htmlFor="3">Shoes</label>
                    </div>
                </div>
                <div className='filterItem'>
                    <h2>Filter by price</h2>
                    <div className='inputItem'>
                        <span>0</span>
                        <input type='range' min={0} max={1000} onChange={(e)=>setMaxPrice(e.target.value)} />
                        <span>{maxPrice}</span>
                    </div>

                </div>
                <div className='filterItem'>
                    <h2>Sort by</h2>
                    <div className='inputItem'>
                        <input type='radio' id='asc' value='asc' name='price' onChange={() => setSort("asc")} />
                        <label htmlFor='asc'>Price (Lowest first)</label>
                    </div>
                    <div className='inputItem'>
                        <input type='radio' id='desc' value='desc' name='price' onChange={() => setSort("desc")} />
                        <label htmlFor='desc'>Price (Highest first)</label>
                    </div>
                </div>
            </div>
            <div className='right'>
                <img className='categoryImg' src="/images/dog1.jpg" alt=''/>

            </div>
        </div>
    )
}
export default Products