const jwt = require('jsonwebtoken');

const secretkey = 'my2w7wjd7yXF64FIADfJxNs1oupTGAuW'


export const protectFunction = (authorization) => {
  if (authorization) {
    console.log('In-service auth: ' + authorization);
    let auth = jwt.verify(authorization, secretkey, (err, decoded) => {
      console.log(err)
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