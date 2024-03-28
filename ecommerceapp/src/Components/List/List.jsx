import React from 'react'
import "./List.scss"
import Card from "../Card/Card"
import {useState, useEffect} from 'react'

const List = (params) => {
    const [products, setProducts] = useState()
    useEffect(() => {
        getProductData()
    }, [])

    async function getProductData() {
        try {
            const response = await fetch('https://localhost:7072/Product/getAll', {
                method: 'GET'
            });
            if (response.ok) {
                console.log("Fetched data successfully")
            }
            const data = await response.json()
            setProducts(data);
        } catch (error) {
            console.error("Error fetching data: ", error)
        }  
    }
    return (
        <div className='list'>
            {products?.map((item) => (
                <Card item={item} key={item.id } />
            )) }
        </div>
    )
}
export default List