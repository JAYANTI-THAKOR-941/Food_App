import React from 'react'
import { useState } from 'react'
import api from '../services/api';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const ResetPassword = () => {

    const [password,setPassword] = useState("");

    const {token} = useParams();

    const navigate = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault();

        try{
            const res =  await axios.post(`http://localhost:5000/api/user/reset-password/${token}`,{newPassword:password});
            alert(res.data.message)
            navigate('/login')
        }
        catch(err){
            console.log(err);
        }
    }

  return (
    <div>
       <form onSubmit={handleSubmit}>
         <input type="text" placeholder='Enter new password.' value={password} onChange={(e)=>setPassword(e.target.value)}  />
        <button>Reset Password</button>
       </form>
    </div>
  )
}

export default ResetPassword