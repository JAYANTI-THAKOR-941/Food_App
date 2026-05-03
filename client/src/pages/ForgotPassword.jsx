import React from 'react'
import { useState } from 'react'
import axios from 'axios';

const ForgotPassword = () => {

    const [email,setEmail] = useState("");

    const handleSubmit = async(e)=>{
        e.preventDefault();

        try{
            const res =  await axios.post(`http://localhost:5000/api/user/forgot-password`,{email});
            alert(res.data.message)
        }
        catch(err){
            console.log(err);
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder='Enter an email.' name='email' value={email} onChange={(e)=>setEmail(e.target.value)}  />
            <button >Sent Link</button>
        </form>
    </div>
  )
}

export default ForgotPassword