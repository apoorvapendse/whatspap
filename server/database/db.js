import mongoose from "mongoose";

const connectDB = async () => {

    try {
        mongoose.set('strictQuery', false);
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology:true,
            dbName: "whatspap"
        }).then(() => console.log("database connected")).catch((e) => { console.log(e) })
        
    } catch (error) {
        console.log("couldn't connect to DB",error)
        
    }

    
}

export default connectDB;