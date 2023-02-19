import { protectFunction } from '../services/protected';

export const protect = (req, res, next) => {
  let authorization = req.headers.authorization.split('Bearer ')[1];
  let response = {
    "data": protectFunction(authorization)
  };
  res.send(response);
  next();
}
