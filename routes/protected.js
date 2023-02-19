import { protectFunction } from '../services/protected';

export const protect = (req, res, next) => {
  req.get('Accept').includes('application/json')
  let authorization = req.headers.authorization.split('Bearer ')[1];
  let response = {
    "data": protectFunction(authorization)
  };
  if (req.accepts('application/json')) {
    res.json(response);
  } else {
    res.send(response);
  next();
  }
}