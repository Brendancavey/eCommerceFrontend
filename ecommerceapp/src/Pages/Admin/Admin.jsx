import React from 'react'
import {useState} from 'react'
import "./Admin.scss"

function Admin() {
    const [productTitle, setTitle] = useState()
    const [productDesc, setDesc] = useState()
    const [status, setStatus] = useState()
    const [productPrice, setPrice] = useState()
    const [productSalePrice, setSalePrice] = useState()
    const [selectedFile0, setSelectedFile0] = useState(null)
    const [selectedFile1, setSelectedFile1] = useState(null)

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
    async function handleClickAddProduct()
    {
        const formData = new FormData();
        formData.append('title', productTitle)
        formData.append('description', productDesc)
        formData.append('isNew', status)
        formData.append('price', parseInt(productPrice))
        formData.append('salePrice', parseInt(productSalePrice))
        formData.append('file0', selectedFile0)
        formData.append('file1', selectedFile1)
      
        const requestOptions = {
            method: 'POST',
            //headers: { 'Content-Type': 'application/json' },
            body: formData
        };
        try {
            const response = await fetch('https://localhost:7072/Product/addProduct', requestOptions)

            if (response.ok) {
                console.log("Added product successfully")
            } else {
                console.error("Error happened", response.statusText);
            }
        } catch (error) {
            console.error("Error occured: ", error);
        }
    }
    return (
        <div className='admin'>
            <div>
                <h1>Admin Page</h1>
                <form>
                    <div>
                        <h3>Product Name</h3>
                        <input type='text' value={productTitle} placeholder="Product Name" onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div>
                        <h3>Description</h3>
                        <input type='text' value={productDesc} placeholder="Description" onChange={(e) => setDesc(e.target.value)} />
                    </div>
                    
                    <input type='radio' id='new' value='new' name='isNewItem?' onChange={() => setStatus(true)} />
                    <label htmlFor='new'>Is New</label>
                    <input type='radio' id='notNew' value='notNew' name='isNewItem?' onChange={() => setStatus(false)} />
                    <label htmlFor="notNew">Is Not New</label>
                    <div>
                        <h3>Price</h3>
                        <input type='text' value={productPrice} placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div>
                        <h3>Sale Price</h3>
                        <input type='text' value={productSalePrice} placeholder="Sale Price" onChange={(e) => setSalePrice(e.target.value)} />
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
                        <button onClick={() => handleClickAddProduct()}>Add Product</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Admin