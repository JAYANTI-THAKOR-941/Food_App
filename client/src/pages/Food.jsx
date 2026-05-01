import React, { useEffect, useState } from 'react'
import api from '../services/api';

const Food = () => {

    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState("");

    const fetchFoods = async()=>{
        try{
            const res = await api.get('/food/all');
            setProducts(res.data);
            setLoading(false);
            setError("");
        }
        catch(err){
            setError("Failed to fetch foods.!",err);
            setLoading(false);
        }
    }


    useEffect(()=>{
        fetchFoods();
    },[]);

    if(error) return <h2>{error}</h2>;
    if(loading) return <h2>Loading..!!</h2>

  return (
    <div>
        {
            products.map((p)=>(
                <div className="card">
                    <img src={p.image} alt="" />
                    <h3>{p.name}</h3>
                    <p>{p.description}</p>
                    <p>Price:₹{p.price}</p>
                    <p>{p.category}</p>
                    <button>Order Now</button>
                </div>
            ))
        }
    </div>
  )
}

export default Food