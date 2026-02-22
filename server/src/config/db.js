import mongoose from 'mongoose';

export async function connectDb(uri = process.env.MONGO_URI) {
  if (!uri) return;
  await mongoose.connect(uri);
  console.log('MongoDB connected');
}
