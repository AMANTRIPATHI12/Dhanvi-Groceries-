import { Router } from 'express';

const router = Router();
router.get('/analytics', (req, res) => {
  res.json({ orders: 0, revenue: 0, note: 'Replace with aggregation pipeline for production.' });
});

export default router;
