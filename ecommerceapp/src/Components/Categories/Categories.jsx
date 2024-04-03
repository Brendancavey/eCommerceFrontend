import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { addToCategories, removeCategory, resetCategories } from "../../Redux/categoryReducer";

function Categories() {
    const selectedCategories = useSelector(state => state.categories.selectedCategories)
    const [categories, setCategories] = useState()
    const dispatch = useDispatch()
    useEffect(() => {
        getCategories()
        resetSelectedCategories()
    }, [])
    console.log(selectedCategories)
    async function getCategories() {
        try {
            const response = await fetch('https://localhost:7072/Category/getAll', {
                method: 'GET'
            })
            const data = await response.json()
            setCategories(data)
        }
        catch (error) {
            console.error("Error occured: ", error);
        }
    }
    function resetSelectedCategories() {
        dispatch(resetCategories())
    }
    const handleCategoryChange = (catId) => {
        selectedCategories.includes(catId)
            ? dispatch(removeCategory({
                id: catId
            }))
            : dispatch(addToCategories({
                id: catId
            }))
    }
    return (
        <div>
            <h3>Category</h3>
            {categories?.map(cat => (
                <div className='categories' key={cat.id}>
                    <input
                        type='checkbox'
                        id={cat.id}
                        onChange={() => handleCategoryChange(cat.id)} />
                    <label htmlFor={cat.id}>{cat.name}</label>
                </div>
            ))}
        </div>
    )
}
export default Categories