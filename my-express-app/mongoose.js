import mongoose from "mongoose";

async function connectToDB() {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/kavya')
        console.log("Connected to  MongoDB!")
    } catch (err) {
        console.error('connection error:', err)
    }
}
connectToDB();

//Define a schema
const userSchema = new mongoose.Schema({
    name:{type: String, required: true},
    email:{type: String, required: true, unique: true},
    age: {type: Number, default: 18},
    isActive: {type: Boolean, default: true}
});

//create a model
const user = mongoose.model('User', userSchema);

// inser data in model

async function createUser() {
    const newUser = new user({
        name: "kaavyy",
        email: "kavya@example.com",
        age: 20,
    });


    try{
        const savedUser = await newUser.save();  // save the document
        console.log("user created:", savedUser)
    } catch(err) {
        console.log('Error creating user:', err)
    }
}
createUser();