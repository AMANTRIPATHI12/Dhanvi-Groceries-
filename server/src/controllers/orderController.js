import { buildWhatsAppSummary } from '../services/orderService.js';

export function createOrder(req, res) {
  const order = req.body;
  res.status(201).json({
    ...order,
    whatsappSummary: buildWhatsAppSummary(order)
  });
}
