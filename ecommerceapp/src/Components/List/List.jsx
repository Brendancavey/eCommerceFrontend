import React from 'react'
import "./List.scss"
import Card from "../Card/Card"
import {useState, useEffect} from 'react'

const List = (params) => {
    const [products, setProducts] = useState()
    const [selectedCategories, setSelectedCategories] = useState()
    useEffect(() => {
        getProductData()
    }, [selectedCategories])
    useEffect(() => {
        setSelectedCategories(params.selectedCategories)
    }, [params.selectedCategories])
    function userSelectedCategories() {
        return selectedCategories.length > 0
    }
    async function getProductData() {
        if (userSelectedCategories()) {
            const url = new URL('https://localhost:7072/Product/get-products-by-categories')
            selectedCategories.forEach(categoryId => {
                url.searchParams.append('selectedCategoryIds', categoryId)
            })
            try {
                const response = await fetch(
                    url, {
                    method: 'GET'
                });
                if (response.ok) {
                    console.log("Fetched data with categories successfully")
                }
                const data = await response.json()
                setProducts(data);
            }
            catch(error) {
                console.error("Error fetching data with categories: ", error)
            }
        }
        else {
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
    }
    return (
        <div className='list'>
            {products?.map((item) => (
                <Card item={item} key={item.id} />
            ))}  
        </div>
    )
}
export default List