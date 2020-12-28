import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    name: String,
    age: Number,
    sex:String,
    tel: Number,
});