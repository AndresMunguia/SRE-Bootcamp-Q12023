import { protectFunction } from '../services/protected';

export const protect = (req, res, next) => {
  req.get('Accept').includes('application/json')

  if (!req.headers.authorization) {
    return res.status(403).json({
    status: 403,
    error: 'Please enter a valid token',
    })
  };
  
  let authorization = req.headers.authorization.split('Bearer ')[1];
  
  try {
    const data = protectFunction(authorization);
    res.status(200).json({
      data
    });
  } catch (error) {
    console.log({error});
  }
  next();
}