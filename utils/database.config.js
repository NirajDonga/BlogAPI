import mongoose from "mongoose";
export const connect = async () => {
    try {
        const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/blogapi";
        await mongoose.connect(mongoURI);
        console.log('MongoDB Connected...');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1);
    }
}
export default connect