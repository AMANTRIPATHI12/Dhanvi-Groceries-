export const orderStatuses = ['Preparing', 'Out for Delivery', 'Delivered'];

export function buildWhatsAppSummary(order) {
  const lines = order.items.map((i) => `${i.name} x${i.qty}`).join('%0A');
  return `Order ${order.id}%0A${lines}%0ATotal ₹${order.total}`;
}
