import mongoose from 'mongoose';

const conversationSchema = new mongoose.Schema({
    message:String,
    members:Array,
},{timestamps:true})

//creating new collection
const Conversations = mongoose.model('Conversations',conversationSchema);
export default Conversations