import mongoose from 'mongoose';
import dns from 'dns';

// Fix for Node.js DNS resolution issues with MongoDB Atlas SRV records
if (dns.setDefaultResultOrder) {
    dns.setDefaultResultOrder('ipv4first');
}

// Force use of Google DNS for this process to bypass local/ISP DNS issues
try {
    dns.setServers(['8.8.8.8', '8.8.4.4']);
} catch (e) {
    console.warn("⚠️ Could not set custom DNS servers, using system defaults.");
}

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Database connection successfully.');
    }
    catch(err){
        console.log('Failed to connect database.!',err);
    }
}

export default connectDB;