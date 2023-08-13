import {Server} from 'socket.io'
const io = new Server(7000,{
    cors:{
        origin:"*"
    }
});;

let activeUsers = []
const addUser  = (userData,socketid)=>{
    !activeUsers.some(user=>user.sub===userData.sub) && (activeUsers.push({...userData,socketid}))
     console.log("addUsers called on socket")

}

const getUser = (receiverID)=>{
    const currentSocket = activeUsers.find(user=>user.sub===receiverID)
    return currentSocket
}

//executed whenever a connection is established
io.on("connection",(socket)=>{
    // console.log("user connected:",socket.id);


    socket.on("addSocketUsers",userData=>{
        addUser(userData,socket.id)
        io.emit("getSocketUsers",activeUsers);
        //this emit will go from backend to frontend
    })

    socket.on("sendSocketMessage",data=>{
        const receiverSocket = getUser(data.receiverID);
        console.log("receiversocket:",receiverSocket.socketid);
        console.log(data)
        io.to(receiverSocket.sokcetid).emit('getMessage',data)

    })

})