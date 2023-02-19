const crypto = require("crypto");
const mysql = require('mysql');
const jwt = require('jsonwebtoken');


// DB connection.
export const connection = mysql.createConnection({
  host     : 'sre-bootcamp-selection-challenge.cabf3yhjqvmq.us-east-1.rds.amazonaws.com',
  user     : 'secret',
  password : 'jOdznoyH6swQB9sTGdLUeeSrtejWkcw',
  database : 'bootcamp_tht',
  port     : '3306'
});


// Adding the salt.
export const addingSalt = (username, password) => {
  
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

// Endpoint function.
export const loginFunction = (username, password) => {
  if (username, password) {
    let hash = addingSalt (username, password);
    let token = connection.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, hash], function(error, results, fields) {
			if (error) throw error;
			if (results.length > 0) {
				let data = JSON.stringify(results);
				let parsed  = JSON.parse(data);
				let roleID = parsed[0].role;
				let signedtoken = jwt.sign({ roleID }, "my2w7wjd7yXF64FIADfJxNs1oupTGAuW");
        //console.log(authToken)
        return signedtoken;
			} else {
				return ('Please enter valid credential.');
			}		
		})
    return token
    //console.log(hash)
    //console.log(token)
	}
}