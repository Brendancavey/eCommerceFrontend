import React from 'react';

async function fetchImage2(id) {

    const response = await fetch(`https://localhost:7072/Product/get-image-by-id2/${id}`, {
        method: 'GET'
    });
    if (response.ok) {
        const data = await response.blob();
        return (URL.createObjectURL(data));
    }
    return null
}

export default fetchImage2;