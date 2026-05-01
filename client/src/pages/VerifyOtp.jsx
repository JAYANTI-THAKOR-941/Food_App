import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import api from '../services/api';

const VerifyOtp = () => {

    const [otp,setOtp] = useState(null);

    const location = useLocation();
    const email = location.state.email;

    const handleVerify = async(e)=>{
        try{
            const res = await api.post('/user/verifyOtp',{email,otp});
            alert(res.data.message);
            navigate('/login')
        }
        catch(err){
            console.log('Failed to verify otp.!',err);
        }
    }
  return (
    <div>
        <input type="text" placeholder='Enter valid otp' onChange={(e)=>setOtp(e.target.value)} />
        <button onClick={handleVerify}>Verify</button>
    </div>
  )
}

export default VerifyOtp