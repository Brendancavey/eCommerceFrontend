import React from 'react'
import {useState} from 'react'
import "./AddCategory.scss"

function AddCategory() {
    const [categoryName, setName] = useState()
    const [responseMessage, setResponseMessage] = useState()

    async function handleClickAddCategory()
    {
        const formData = new FormData();
        formData.append('name', categoryName)
        formData.append('products', null)
      
        const requestOptions = {
            method: 'POST',
            body: formData
        };
        try {
            const response = await fetch('https://localhost:7072/Category/addCategory', requestOptions)

            if (response.ok) {
                setResponseMessage(<h3 style={{ color: "green" }}>Added Category successfully</h3>)
               console.log("Added Category successfully")
            } else {
                console.error("Error happened", response.statusText);
            }
        } catch (error) {
            console.error("Error occured: ", error);
        }
    }
    return (
        <div className='addcategory'>
            <div>
                <h1>Add Category</h1>
                
                    <div>
                        <h3>Category Name</h3>
                    <input type='text' value={categoryName} placeholder="Category Name" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                        <button onClick={() => handleClickAddCategory()}>Add Category</button>
                        {responseMessage}  
                    </div>
            </div>
        </div>
    )
}
export default AddCategory