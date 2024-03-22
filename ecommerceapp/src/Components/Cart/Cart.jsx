import React from 'react';
import "./Cart.scss";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function Cart() {
    let total = 0
    const fakeData = [
        {
            id: 1,
            img: "/images/dog2.jpg",
            img2: "/images/dog0.jpg",
            title: "Bear Dog",
            desc: "Enjoys eating, running, and farting.",
            isNew: false,
            oldPrice: 19,
            newPrice: 2,
            breed: "Pitbull/Husky",
            weight: 95,
        },
        {
            id: 2,
            img: "/images/dog3.jpg",
            img2: "/images/dog4.jpg",
            title: "Woober Gorl",
            desc: "Enjoys chasing cats, breaking things, and adventuring.",
            isNew: true,
            oldPrice: 36,
            newPrice: 5,
            breed: "Pitbull/Husky",
            weight: 80,
        },
        /*{
            id: 1,
            img: "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/11021985/pexels-photo-11021985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "T-Shirt",
            desc: "A very nice shirt",
            isNew: true,
            oldPrice: 19,
            newPrice: 12,
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/840916/pexels-photo-840916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/1206873/pexels-photo-1206873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Coat",
            desc: "A good looking coat",
            isNew: true,
            oldPrice: 30,
            newPrice: 17,
        },*/
    ];
  return (
      <div className='cart'>
          <h1>Products in your cart</h1>
          {fakeData?.map(item => (
              <div className='item' key={item.id}>
                  <img src={item.img} alt='' />
                  <div className='details'>
                      <h1>{item.title}</h1>
                      <p>{item.desc.substring(0, 100)}</p>
                      <div className="price"> 1 x ${item.newPrice}</div>
                  </div>
                  <DeleteOutlineIcon className='delete' />
              </div>
          ))}
          <div className='total'>
              <span>SUBTOTAL</span>
              {fakeData.forEach(dog => total += dog.newPrice)}
              <span> ${total}</span>
          </div>
          <button>PROCEED TO CHECKOUT</button>
          <span className='reset'> Reset Cart</span>
      </div>
  );
}

export default Cart;