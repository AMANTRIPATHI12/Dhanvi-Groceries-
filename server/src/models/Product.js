import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  stock: Boolean,
  image: String
}, { timestamps: true });

export default mongoose.model('Product', productSchema);
