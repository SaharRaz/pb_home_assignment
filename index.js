import DbConnection from './db/dbConnection.js';
// import createRoute from './routes/createData.route';
// import readRoute from './routes/readData.route';
// import updateRoute from './routes/updateData.route';
// import deleteRoute from './routes/deleteData.route';
// import qaQuery from "./routes/qaQuery";
// import {logger, requestLoggerMiddleware} from './middleware/logger'
import express from "express";
import dotenv from 'dotenv';
import userRoutes from './users/src/routes/user.routes.js';

// import * as console from "console";
dotenv.config();


const PORT = process.env.PORT || 3007;
const app = express();
const db = new DbConnection();

(async function activate () {
    await db.connectToDatabase();
})()



app.use(express.json());
app.use('/api/users', userRoutes);





app.listen(PORT, () => {
    console.log(`API server is running on http://localhost:${PORT}`);
});