import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import api from '../services/api';

const Register = () => {

  const [form,setForm] = useState({
    name:"",
    email:"",
    password:""
  });

  const navigate = useNavigate();

  const handleChange = (e)=>{
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();

    try{
      const res = await api.post('/user/register',form);
      alert(res.data.message);
      navigate('/verifyOtp',{state:{email:form.email}})
    }
    catch(err){
      console.log('Register failed.!!')
    }

  }

  return (
    <div>
     <form onSubmit={handleSubmit} >
       <input type="text" name='name' onChange={handleChange} value={form.name} placeholder='Enter name.' />
      <input type="text" name='email' onChange={handleChange} value={form.email} placeholder='Enter Email.' />
      <input type="text" name='password' onChange={handleChange} value={form.password} placeholder='Enter Password.' />
      <button>Register</button>
     </form>
    </div>
  )
}

export default Register