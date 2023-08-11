import mongoose from "mongoose"
import Conversations from "../models/conversation.js";
import Message from "../models/message.js";
export const setConversation = async (req, res) => {
   try {
    console.log("from setconvo",req.body)
    const senderID = req.body.senderID;
    const receiverID = req.body.receiverID;

    //
    //search in members array and check whether all elements match using $all operator
    const checkExistence = await Conversations.findOne({members:{$all:[receiverID,senderID]}})
    if(checkExistence){
    return res.status(200).json("convo pre exists")
    }
   
    const newConvo = new Conversations({
       members:[senderID,receiverID]
      })
      await newConvo.save();
      return res.status(200).json("new convo created")

   } catch (error) {
      return res.status(500).json(error);
        console.log(error)
   }
}

export const getPreviousConvos = async (req, res) => {
   try {
      
      const conversation = await Conversations.findOne({ members: { $all: [req.body.receiverID, req.body.senderID] } })
      res.status(200).json(conversation);
   } catch (error) {
      res.status(500).json("failed to fetch convo");
      
   }

}
export const addNewMessage = async(req,res)=>{
   console.log(req.body)
   try {
      const newMessage = new Message({
         text:req.body.message.text,
         conversationID: req.body.message.conversationID,
         senderID: req.body.message.senderID,
         receiverID: req.body.message.receiverID,
         type: req.body.message.type
      });
      newMessage.save()
      await Conversations.findByIdAndUpdate(req.body.message.conversationID,{message:req.body.message.text});
      //set latest message in conversations tab
      return res.status(200).json("message sent");

   } catch (error) {
      console.log(error)
      return res.status(500).json(error)
   }


}

export const getMessages = async(req,res) => {
   try {
      const messages = await Message.find({conversationID:req.params.convoID})
      console.log(req.params.convoID);
      console.log(messages)
      return res.status(200).json(messages);
   } catch (error) {
      return res.status(500).json(error);
      
   }
}