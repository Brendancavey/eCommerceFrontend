import React from 'react'
import {useState} from 'react'
import "./Admin.scss"

function Admin() {
    const [productTitle, setTitle] = useState()
    const [productDesc, setDesc] = useState()
    const [status, setStatus] = useState()
    const [productPrice, setPrice] = useState()
    const [productSalePrice, setSalePrice] = useState()
    async function handleClick()
    {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: 0,
                img: null,
                img2: null,
                title: productTitle,
                description: productDesc,
                isNew: status,
                price: parseInt(productPrice),
                salePrice: parseInt(productSalePrice)
            })
        };
        await fetch('https://localhost:7072/Product/addProduct', requestOptions)
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
                        <button onClick={() => handleClick()}>Add Product</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Admin