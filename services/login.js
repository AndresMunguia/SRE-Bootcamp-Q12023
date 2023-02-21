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
  if(!username || !password) return null;
    let salt;
    switch(username){
      case 'admin':
        salt = "F^S%QljSfV";
        break;
      case 'bob':
        salt = "ykptwoT=M(";
        break;
      case 'noadmin':
        salt = "KjvFUC#K*i";
        break;
      default:
        salt = null;
    }
  const hashpass = crypto.createHash("sha512")
                        .update(password + salt)
                        .digest("hex");
  return (hashpass)
}



// Endpoint function.
export const loginFunction = async (username, password) => {
  if(!username || !password) return 'Enter a valid password/username.';
  return new Promise((resolve, reject) => {
    let hash = addingSalt (username, password);
    const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
    connection.query(query, [username, hash], (error, results) => {
      if (results.length > 0) {
        const {role} = results[0];
        const token = jwt.sign({ role }, "my2w7wjd7yXF64FIADfJxNs1oupTGAuW");
        resolve(token);
      }  else {
        resolve({
          status: 403,
          error: 'Please enter a valid username and/or password',
        });
      }
    });
  });
}

