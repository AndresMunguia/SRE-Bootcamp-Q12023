import { loginFunction } from '../services/login';

export const login = async (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;
  if (!username || !password) {
    return res.status(403).json({
    status: 403,
    error: 'Please enter a valid username and/or password',
    })
  };

  try {
    const data = await loginFunction(username, password);
    res.status(200).json({
      data
    });
  } catch (error) {
    console.log({error});
  }
  next();
}