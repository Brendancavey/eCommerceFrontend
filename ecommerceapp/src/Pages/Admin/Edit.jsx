import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import "./Edit.scss"


function Edit() {
    const productId = parseInt(useParams().id)
    const [item, setItem] = useState({})
    const [productTitle, setTitle] = useState()
    const [productDesc, setDesc] = useState()
    const [status, setStatus] = useState()
    const [productPrice, setPrice] = useState()
    const [productSalePrice, setSalePrice] = useState()
    const [selectedFile0, setSelectedFile0] = useState(null)
    const [selectedFile1, setSelectedFile1] = useState(null)
    const [responseMessage, setResponseMessage] = useState()
    useEffect(() => {
        getProductData(productId)
    }, [])
    useEffect(() => {
        setTitle(item.title)
        setDesc(item.description)
        setPrice(item.price)
        setSalePrice(item.salePrice)
        setStatus(item.isNew)
    }, [item])
    async function getProductData(id) {
        try {
            const response = await fetch(`https://localhost:7072/Product/get-by-id/${id}`, {
                method: 'GET'
            });
            if (response.ok) {
                console.log("Fetched product data successfully")
            }
            const data = await response.json()
            setItem(data);
        } catch (error) {
            console.error("Error fetching product data: ", error)
        }
    }
    function goBack() {
        window.history.back();
    }
    const handleFileChange0 = (event) => {
        if (event.target.files && event.target.files.length > 0) {
            setSelectedFile0(event.target.files[0]);
        }
    }
    const handleFileChange1 = (event) => {
        if (event.target.files && event.target.files.length > 0) {
            setSelectedFile1(event.target.files[0]);
        }
    }
    async function handleClickEditProduct()
    {
        const formData = new FormData();
        formData.append('Id', productId)
        formData.append('title', productTitle)
        formData.append('description', productDesc)
        formData.append('isNew', status)
        formData.append('price', parseInt(productPrice))
        formData.append('salePrice', parseInt(productSalePrice))
        formData.append('file0', selectedFile0)
        formData.append('file1', selectedFile1)
      
        const requestOptions = {
            method: 'PUT',
            body: formData
        };
        try {
            const response = await fetch('https://localhost:7072/Product/updateProduct', requestOptions)

            if (response.ok) {
                setResponseMessage(<h3 style={{ color: "green" }}>Product updated successfully</h3>)
                console.log("Product updated successfullyy")
            } else {
                console.error("Error happened", response.statusText);
            }
        } catch (error) {
            console.error("Error occured: ", error);
        }
    }
    return (
        <div className='edit'>
            <div>
                <h1>Edit Page</h1>
                    <div>
                        <h3>Product Name</h3>
                    <input type='text' value={productTitle} placeholder={item.title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div>
                        <h3>Description</h3>
                    <input type='text' value={productDesc} placeholder={item.description} onChange={(e) => setDesc(e.target.value)} />
                    </div>
                    
                <input type='radio' id='new' value='new' checked={status} name='isNewItem?' onChange={() => setStatus(true)} />
                    <label htmlFor='new'>Is New</label>
                <input type='radio' id='notNew' value='notNew' checked={!status} name='isNewItem?' onChange={() => setStatus(false)} />
                    <label htmlFor="notNew">Is Not New</label>
                    <div>
                        <h3>Price</h3>
                    <input type='text' value={productPrice} placeholder={item.price} onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div>
                        <h3>Sale Price</h3>
                    <input type='text' value={productSalePrice} placeholder={item.salePrice} onChange={(e) => setSalePrice(e.target.value)} />
                    </div>
                    <div>
                        <h3>Image 1</h3>
                        <input type='file' onChange={handleFileChange0}/>
                    </div>
                    <div>
                        <h3>Image 2</h3>
                        <input type='file' onChange={handleFileChange1} />
                    </div>
                    <div>
                        <button onClick={() => handleClickEditProduct()}>Edit Product</button>
                        <button onClick={goBack}>Cancel</button>
                        {responseMessage}  
                    </div>
                
            </div>
        </div>
    )
}
export default Edit