import React from 'react';
import { NextRequest, NextResponse } from 'next/server';
import mongoose from "mongoose";
import Message from '../../../../models/Message';

export async function POST(req: NextRequest, res: NextResponse) {
    const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}.47rfyoo.mongodb.net/`;

    let client;

    try {
        client = await mongoose.connect(MONGODB_URI);
        console.log('DB connected')
    } catch(error) {
        console.log('There was an error connecting to the e-mail server. ', error)
    }

    const data = await req.json();
    const {name, email, subject, message} = data;
    
    if(!name || !message || !email || !email.includes('@') || message.trim() === "" || name.trim() === "") {
        NextResponse.json(
            { message: "Invalid input - fill all required fields."}, 
            {status: 422}
            );
            return;
    }

    const newData = {
        ...data,
        data: new Date(),
    };

    try {
        await Message.create(newData);
        console.log("Message sent!")
        return NextResponse.json({message: "Message sent!"}, {status: 201},)
    } catch(error) {
        console.log("Message failed to send please try again later.", error);
        return NextResponse.json({message: 'Error sending the message.'}, {status: 500},)
    }
}