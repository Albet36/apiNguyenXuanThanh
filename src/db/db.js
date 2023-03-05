import mongoose from 'mongoose';
export const connectDB = () => {
    try {
        mongoose.connect(process.env.MONGO_URL);
        console.log("DB Connection Successfull!")
    } catch (error) {
        console.log(error);
    }
};
