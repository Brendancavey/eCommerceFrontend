import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import List from "../../components/List/List"
import "./Products.scss"
import Categories from "../../Components/Categories/Categories"

const Products = () => {
    const categoryId = parseInt(useParams().id);
    const [maxPrice, setMaxPrice] = useState(1000)
    const [sort, setSort] = useState(null)
    return (
        <div className='products'>
            <div className='left'>
                <div className='filterItem'>
                    <h2>Product Categories</h2>
                    <Categories/>
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
                <List categoryId={categoryId} maxPrice={maxPrice} sort={sort} />
            </div>
        </div>
    )
}
export default Products