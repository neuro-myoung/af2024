import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String,
    date: Date,
})

export default mongoose.models.Message ?? mongoose.model("Message", MessageSchema);