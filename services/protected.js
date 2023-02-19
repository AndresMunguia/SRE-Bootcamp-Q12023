const jwt = require('jsonwebtoken');

const secretkey = 'my2w7wjd7yXF64FIADfJxNs1oupTGAuW'


export const protectFunction = (authorization) => {
  if (authorization) {
    let auth = jwt.verify(authorization, secretkey, (err, decoded) => {
      if (decoded) {
        return ("You are under protected data");
      };
			if (err) {
			  return ('Please enter a valid token');			 	
      }
	  })
    return auth
  } 
}