import mongoose from "mongoose";
import dns from "dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const connectDB = async ()=>{

    mongoose.connection.on('connected', ()=>
    console.log("Database Connected"));

    await mongoose.connect(`${process.env.MONGODB_URI}/event-management`);
}

export default connectDB;