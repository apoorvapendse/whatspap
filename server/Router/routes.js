import  express from 'express';
import { addUser, getUsers } from '../Controllers/user-side-ctrler.js';
import { setConversation, getPreviousConvos ,addNewMessage, getMessages} from '../Controllers/conversation-ctrler.js';


const router = express.Router();


router.post("/add-user",addUser)
router.get("/get-users",getUsers)
router.post("/conversation/add",setConversation)
router.post("/conversation/getconvo",getPreviousConvos)
router.post("/message/add",addNewMessage)
// actually it will look like: localhost:8000/message/get/1231231
router.get("/message/get/:convoID",getMessages)

export default router