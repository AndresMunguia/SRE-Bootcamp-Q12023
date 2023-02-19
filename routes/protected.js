import { protectFunction } from '../services/protected';

export const protect = (req, res, next) => {
  let authorization = req.headers.authorization.split('Bearer ')[1];
  console.log('Header: ' + authorization)
  let response = {
    "data": protectFunction(authorization)
  };
  console.log(response)
  console.log(protectFunction(authorization))
  res.send(response);
  next();
}
