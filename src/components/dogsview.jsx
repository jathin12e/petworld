import React from 'react'
import './dogsview.css'

const dogindex =[
  {
    id:1,
    image:"images/download.jpeg",
    name:"Golden retreiver",
    price:10000
  },
  {
    id:2,
    image:"images/download (1).jpeg",
    name:"Bull Dog",
    price:10500
  },
  {
    id:3,
    image:"images/download (2).jpeg",
    name:"German Shepherd",
    price:20500
  },
  {
    id:4,
    image:"images/download (3).jpeg",
    name:"Siberian Husky",
    price:30500
  },
  {
    id:5,
    image:"https://image.petmd.com/files/inline-images/standard-poodle.jpg?VersionId=1Pjx5emdAPxmImIlwCR0tX3HXxxm_NhT",
    name:"Poodle",
    price:40500
  }
]

const dogsview = () => {
  return (
    <div>
      <div className='dogs-position'>
        <div className='selling-position'>
          <h1>Top Selling Dogs</h1>
        </div>
        {dogindex.map((p) => {
          return(
            <div>
                <img src={p.image} className='image1'/>
                <h3>{p.name}</h3>
                <p>{p.price}</p>
            </div>
          )
        })}
        <button className='button'>See More</button>
      </div>
    </div>
  )
}


export default dogsview