import React from 'react'
import "./List.scss"
import Card from "../Card/Card"

const List = (params) => {
    let fakeData = [{}]
    if (params.categoryId === 2) {
        fakeData = [
            {
                id: 1,
                img: "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                img2: "https://images.pexels.com/photos/11021985/pexels-photo-11021985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                title: "T-Shirt",
                isNew: true,
                oldPrice: 19,
                newPrice: 12,
            },
            {
                id: 2,
                img: "https://images.pexels.com/photos/840916/pexels-photo-840916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                img2: "https://images.pexels.com/photos/1206873/pexels-photo-1206873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                title: "Coat",
                isNew: true,
                oldPrice: 30,
                newPrice: 17,
            },
            {
                id: 3,
                img: "https://images.pexels.com/photos/1687719/pexels-photo-1687719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                img2: "https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                title: "Hat",
                isNew: true,
                oldPrice: 13,
                newPrice: 7,
            },
            {
                id: 4,
                img: "https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                img2: "https://images.pexels.com/photos/1102777/pexels-photo-1102777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                title: "Shoes",
                isNew: false,
                oldPrice: 50,
                newPrice: 5,
            },
        ];
    }
    
    return (
        <div className='list'>
            {fakeData?.map((item) => (
                <Card item={item} key={item.id } />
            )) }
        </div>
    )
}
export default List