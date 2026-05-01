import React, { useState } from "react";
import api from "../services/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async(e)=>{
    e.preventDefault();

    try{
      const res = await api.post('/user/login',{email,password});
      alert(res.data.message);
      localStorage.setItem('authToken',res.data.token);
      localStorage.setItem('authUser',JSON.stringify(res.data.user));
    }
    catch(err){
      console.log('Login failed.!!')
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          onChange={(e)=>setEmail(e.target.value)}
          value={email}
          placeholder="Enter Email."
        />
        <input
          type="text"
          name="password"
          onChange={(e)=>setPassword(e.target.value)}
          value={password}
          placeholder="Enter Password."
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
