// import mongoose, {ConnectOptions} from 'mongoose';
// import {logger} from "../middlewere/logger";
import {mongoose} from 'mongoose';
mongoose.set('debug', true);

class DbConnection {
    async connectToDatabase() {
        try {
            const mongodbUri = `mongodb://mongo:27017/digitalWallet`;
            await mongoose.connect(mongodbUri, {
                serverSelectionTimeoutMS: 10000,
                socketTimeoutMS: 45000,
            });
        } catch (error) {
            setTimeout(() => this.connectToDatabase(), 5000);
        }
    }
}

export default DbConnection;