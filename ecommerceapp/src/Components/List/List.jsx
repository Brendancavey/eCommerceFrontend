import React from 'react'
import "./List.scss"
import Card from "../Card/Card"
import {useState, useEffect} from 'react'

const List = (params) => {
    const [products, setProducts] = useState()
    const [selectedCategories, setSelectedCategories] = useState()
    const [maxPrice, setMaxPrice] = useState()
    const [responseMessage, setResponseMessage] = useState(<h3></h3>)

    useEffect(() => {
        setMaxPrice(params.maxPrice)
    }, [params.maxPrice])
    useEffect(() => {
        setSelectedCategories(params.selectedCategories)
    }, [params.selectedCategories])
    useEffect(() => {
        getProductData()
    }, [selectedCategories, maxPrice])
    function noProductsFromFilters(data) {
        return data.length === 0
    }
    async function getProductData() {
        const url = new URL('https://localhost:7072/Product/get-products-by-filters')
        selectedCategories.forEach(categoryId => {
            url.searchParams.append('selectedCategoryIds', categoryId)
        })
        url.searchParams.append('filterPrice', maxPrice)
        try {
            const response = await fetch(
                url, {
                method: 'GET'
            });
            if (response.ok) {
                console.log("Fetched data with filters successfully")
            }
            const data = await response.json()
            if (noProductsFromFilters(data)) {
                setResponseMessage(<h3>Hmm..No products seem to exist with your selected filters.</h3>)
            }
            else {
                setResponseMessage(<h3></h3>)
            }
            setProducts(data);
        }
        catch (error) {
            console.error("Error fetching data with filters: ", error)
        }
        /*if (userSelectedCategories()) {
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
        }*/
    }
    return (
        <div className='list'>
            {responseMessage}
            {products?.map((item) => (
                <Card item={item} key={item.id} />
            ))}  
        </div>
    )
}
export default List