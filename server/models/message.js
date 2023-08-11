import mongoose, { mongo } from "mongoose";

const messageSchema  = new mongoose.Schema({

    text:String,
    conversationID:String,
    senderID:String,
    receiverID:String,
    type:String

},{
    timestamps:true
})

const Messages = mongoose.model("Messages",messageSchema);

export default Messages