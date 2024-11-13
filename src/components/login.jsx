import React ,{useState} from 'react'
import './login.css'

const login = () => {
  const [state,updatestate] = useState("Login")
  const onsubmit =(e) =>{
    e.preventDefault

  }
  return (
    <div className='back'>
      <div className='login-position'>
        <img src={"images/istockphoto-1925414052-170667a.webp"} alt="" className='image2'/>
        <div className='body'>
        <h1 className='underline'>{state}</h1>
          <form onSubmit={onsubmit}>
            
            {state==="Login"?<div></div>:<div>
              <label>Name :</label><br />
              <input type="text" placeholder='name' className='input-email' />
            </div>}
            <label>Email :</label><br />
            <input type="email" placeholder='email'  className='input-email'  /><br />
            <label>password :</label><br />
            <input type="password" placeholder='password' className='input-email' /><br />
            
            {state==="sign up"?<div></div>:<div><p style={{marginTop:"10"}}>Last password?<a style={{color: "blue" ,cursor:"pointer",textDecoration:"underline",}}>click here</a></p><hr width="100%" size="4" color='red'/></div>}
            
          
          
          </form>
          <button className={state==="sign up"} onClick={() =>{updatestate("Login")}} style={{marginTop:"10px"}}>login</button>&nbsp; <span style={{fontSize:'30px'}}>/</span> &nbsp;
          <button className={state==="Login"} onClick={() =>{updatestate("sign up")}} style={{marginRight:"10px",marginTop:"10px"}}>sign up</button>
        </div>
        
      </div>
    </div>
  )
}

export default login