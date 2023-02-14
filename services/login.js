const crypto = require("crypto");

export const loginFunction = (username, password) => {
  
  let salt;
  if (username === 'admin') {
   salt = "F^S%QljSfV";
  } else if (username === 'noadmin') {
   salt = "KjvFUC#K*i";
  } else if (username === 'bob') {
   salt = "F^S%QljSfV";
  } else {
	 salt = 'none';
	}

  const hashpass = crypto.createHash("sha512")
                        .update(password + salt)
                        .digest("hex");

return (hashpass)

}
