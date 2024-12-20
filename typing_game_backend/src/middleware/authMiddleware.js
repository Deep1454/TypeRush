const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', ''); // Extract token from header

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify the token
    req.user = decoded; // Attach decoded user info (e.g., user id) to req object
    next(); // Call next middleware/route handler
  } catch (err) {
    res.status(400).json({ message: 'Token is not valid' });
  }
};

module.exports = authMiddleware;
