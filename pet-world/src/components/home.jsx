import React from 'react'
import './home.css'
import './dogsview.css'
import './catsview.css'
import './footer.css'
import {Link} from 'react-router-dom'

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
    { id: 5, image: "images/download.webp", name: "Beagle", price: 10500 }
  ]

  const catindex =[
    {
      id:10,
      image:"images/download (4).jpeg",
      name:"british shorthair",
      price:10000
    },
    {
      id:9,
      image:"images/download (5).jpeg",
      name:"Persian",
      price:10500
    },
    {
      id:11,
      image:"images/download (6).jpeg",
      name:"saimese",
      price:20500
    },
    {
      id:12,
      image:"images/download (7).jpeg",
      name:"bomay cat",
      price:30500
    },
    
      {
        id:13,
        image:"images/download (5).webp",
        name:"Sphynx cat",
        price:10500
      }
  ]

const home = () => {
  return (
    <div className='page-extend'>
        <div className='home-page'>
            <div className='part'>
                <h1 className='font'>WELCOME TO <span style={{color: "red"}}>PET WORLD</span> <br /><span className='font'>Find Your <span style={{color: "red"}}>Loyal Friend</span></span></h1>
                
            </div>
            <div>
                <img src={'images/home.jpg'}  height='350' width='350' className='img'/>
            </div>
        </div>
        <div className='carousel-items'>
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel"  className='carousel'>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={"images/images (4).jpeg"} class="d-block w-100" alt="..." height="400" width='200'/>
                    </div>
                    <div class="carousel-item">
                    <img src={"images/images (5).jpeg"} class="d-block w-100" alt="..." height="400" width='200'/>
                    </div>
                    <div class="carousel-item">
                    <img src={"images/images (3).jpeg"} class="d-block w-100" alt="..." height="400" width='200'/>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>   
            </div>
            <div className='text-position'>
                <h1 style={{fontSize:"30px"}}>Choose Your Pet</h1>
                <div className='down-symbol'>
                    <h3><i class="fa-solid fa-chevron-down fa-beat"></i></h3>
                </div>
            </div>
        </div>
        <div className='dogs-position'>
            <div>
               <h1 className='selling-position'>Top Selling Dogs</h1>
            </div>
            {dogindex.map((p) => {
            return(
              <Link style={{color:"#000", textDecoration:"none"}} to={`/dog-detailspage/${p.id}`}><div>
                    <img src={p.image} className='image1'/>
                    <h3>{p.name}</h3>
                    <p>{p.price}</p>
                </div></Link>
            )
            })}
            <button className='button'><Link to='/dogs'>see more</Link></button>
        </div>
        <div className='cats-position'>
            <div>
            <h1 className='selling-position'>Top Selling Cats</h1>
            </div>
            {catindex.map((p) => {
            return(
                <Link style={{color:"#000", textDecoration:"none"}} to={`/cat-detailspage/${p.id}`}><div>
                    <img src={p.image}  className='image1'/>
                    <h3>{p.name}</h3>
                    <p>{p.price}</p>
                </div></Link>
                
            )
            })}
            <button className='button' ><Link to='/cats'>see more</Link></button>
        </div>
        <div className='back'>
            <h1>Contact Us</h1>
            <div className='contact-position'>
                <h3>muppalaJathin@gmail.com</h3>
                <h3>Phone No : 7305929739</h3>
            </div> 
            <div className='align'>
              <input type='text' placeholder='ask question' className='input2'/> 
              <button className='input2' style={{margin:"10px"}}>post</button>
            </div>
        </div>
    </div>
  )
}

export default home