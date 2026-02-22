import express from 'express';
import cors from 'cors';
import multer from 'multer';
import { connectDb } from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import { adminAuth } from './middleware/auth.js';

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(cors());
app.use(express.json());

app.get('/health', (_, res) => res.json({ ok: true }));
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/admin', adminAuth, adminRoutes);
app.post('/api/upload-list', upload.single('listImage'), (req, res) => res.json({ file: req.file?.filename }));

connectDb().catch(() => console.log('Mongo not configured, running in template mode'));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on ${port}`));
