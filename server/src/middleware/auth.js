export function adminAuth(req, res, next) {
  if (req.headers['x-admin-key'] === process.env.ADMIN_KEY || process.env.NODE_ENV !== 'production') return next();
  return res.status(401).json({ message: 'Unauthorized' });
}
