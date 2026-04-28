import express from 'express'
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();


const app = express();

const PORT = process.env.PORT || 8000

// database connection
connectDB();


// middlewares
app.use(express.json());
app.use(cors({
    origin:"http://localhost:5173"
}))

app.use(express.urlencoded({extended:true}));


// import routes
import userRoutes from './routes/userRoutes.js';

// use route
app.use('/api/user',userRoutes);

app.get('/',(req,res)=>{
    res.send("Server is working successfully.!!");
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})