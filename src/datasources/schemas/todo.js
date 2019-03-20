import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
  content: String
});

export default mongoose.model('Todo', todoSchema);