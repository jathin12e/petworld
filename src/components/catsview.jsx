import React from 'react'
import './catsview.css'



const catindex =[
  {
    id:1,
    image:"images/download (4).jpeg",
    name:"british shorthair",
    price:10000
  },
  {
    id:2,
    image:"images/download (5).jpeg",
    name:"Persian",
    price:10500
  },
  {
    id:3,
    image:"images/download (6).jpeg",
    name:"saimese",
    price:20500
  },
  {
    id:4,
    image:"images/download (7).jpeg",
    name:"bomay cat",
    price:30500
  },
  {
    id:5,
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Egyptian-mau-Face.jpg/275px-Egyptian-mau-Face.jpg",
    name:"Egyptian Mau",
    price:50500
  }
]

const catsview = () => {
  return (
    <div>
      <div className='cats-position'>
        <div className='selling-position'>
          <h1>Top Selling Dogs</h1>
        </div>
        {catindex.map((p) => {
          return(
            <div>
                <img src={p.image}  className='image1'/>
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

export default catsview