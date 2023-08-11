import axios from 'axios';

export async function addUser(reqBody){
    const url = 'http://localhost:5000';
 
    try {
        await axios.post(`${url}/add-user`,reqBody);
       console.log("adduser  sent from client")
    } catch (error) {
        console.error("User not added successfully")
        console.log(error)

    }
}
export async function getUsers(){
    const url = 'http://localhost:5000';
 
    try {
       let response =  await axios.get(`${url}/get-users`); 
        console.log("getusers sent")
       return response.data;
    } catch (error) {
        console.error("all users data not fetched successfully")
        console.log(error)

    }
}

export async function setConversation(idObj){
    const url = 'http://localhost:5000';
    //to create a new conversation between sender and receiver id;
    try {
        await axios.post(`${url}/conversation/add`,idObj); 
        console.log("setconversation sent")
    } catch (error) {
        console.error("conversation not set successfully")
        console.log(error)

    }
}

export async function getConvo(senderID,receiverID){
    const url = 'http://localhost:5000';
    try {
       let response = await axios.post(`${url}/conversation/getconvo`,{senderID,receiverID})
       return response.data;

    } catch (error) {
        console.log("error from get convo")
    }
}
export async function newMessage(message){
    const url = 'http://localhost:5000';
    try {
        let response = await axios.post(`${url}/message/add`,{message})
        return response.data;
        
    } catch (error) {
        console.log("error from get convo")
    }
}


export async function getMessages(convoID){
    console.log("get messages called")
    const url = 'http://localhost:5000';
    try {
        let response = await axios.get(`${url}/message/get/${convoID}`)
        return response.data;

    } catch (error) {
        console.log("error from get messages")
    }
}