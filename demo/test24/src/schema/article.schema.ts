import * as mongoose from 'mongoose';

export const ArticleSchema = new mongoose.Schema({
    title: String,
    author_name: String,
    descripton: String,
    content: String,
});