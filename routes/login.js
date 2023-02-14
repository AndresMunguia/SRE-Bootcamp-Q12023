const mysql = require('mysql');
const jwt = require('jsonwebtoken');

export var token;

import { loginFunction } from '../services/login';


// DB connection.
const connection = mysql.createConnection({
  host     : 'sre-bootcamp-selection-challenge.cabf3yhjqvmq.us-east-1.rds.amazonaws.com',
  user     : 'secret',
  password : 'jOdznoyH6swQB9sTGdLUeeSrtejWkcw',
  database : 'bootcamp_tht',
  port     : '3306'
});


// Endpoint function.
export const login = (request, response, next) => {
  let username = request.body.username;
  let password = request.body.password;
 
  if (username && password) {
    let hash = loginFunction(username, password);
		connection.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, hash], function(error, results, fields) {
			if (error) throw error;
			if (results.length > 0) {
				let data = JSON.stringify(results);
				let parsed  = JSON.parse(data);
				let roleID = parsed[0].role;
				token = jwt.sign({ roleID }, "my2w7wjd7yXF64FIADfJxNs1oupTGAuW");
				response.send({
					"data": token
				});
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
}