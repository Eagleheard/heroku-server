import jwt from 'jsonwebtoken';

import AppError from '../Errors/appError.js';

export const authMiddleware = (req, res, next) => {
  try {
    console.log(req.headers);
    const token = req.headers.authorization?.split(' ')[1]; // Bearer token
    if (!token) {
      next(AppError.unauthorized('Need autorization'));
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch (e) {
    next(AppError.unauthorized('Need autorization'));
  }
};
