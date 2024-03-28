import React from 'react';

async function fetchImage(id) {

    const response = await fetch(`https://localhost:7072/Product/get-image-by-id/${id}`, {
        method: 'GET'
    });
    const data = await response.blob();
    return(URL.createObjectURL(data));
}

export default fetchImage;