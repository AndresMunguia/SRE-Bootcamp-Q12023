import { loginFunction } from '../services/login';

export const login = async (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;
  if(!username || !password) {
  res.status(403).json({
    status: 403,
    error: 'Please enter a valid password/username',
  })
 } ;

try {
  const data = await loginFunction(username, password);
  console.log("login.js: ", {data});
  res.status(200).json({
    data
  });
}catch(error){
  console.log({error});
}
  next();
}