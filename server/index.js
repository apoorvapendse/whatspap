import express from 'express';
import dotenv from 'dotenv'
import connectDB from './database/db.js'
import Router from './Router/routes.js';
import cors from 'cors'
dotenv.config();

const app = express();


app.use(cors());//
app.use(express.urlencoded({ extended: true }));
 app.use(express.json());


app.use('/',Router);//this Router is not express Router, it is the router from routes.js

connectDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log("server is up at ",process.env.PORT)
    })
})