export const deliveryFeeForTotal = (total) => (total >= 500 ? 0 : 30);
export const generateOrderId = () => `ORD-${Date.now().toString().slice(-6)}`;
