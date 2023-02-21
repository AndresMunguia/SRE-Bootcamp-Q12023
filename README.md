# Wizeline SRE Bootcamp Selection Challenge

Wizeline bootcamp entry challenge.
API with two endpoints using external database.



## Implementation Checklist

- [x] API Code
- [x] Services Code
- [x] Unit-tests
- [x] Dockerfile
- [x] It Compiles
- [x] It runs



### How to use:

First clone the repository using:

```

$ git clone https://github.com/AndresMunguia/SRE-Bootcamp-Q12023.git

```


You may start the app by installing the dependencies first by using:

```

$ npm install

```

Then, to launch the app, use:

```

$ npm start

```



----------------------------------------



If using the dockerized image, 

```

$ docker pull andresmunguia/wize-andres-munguia:latest

```

Then, once image is on our local machine, execute:

```

$ docker run -d -p 8000:8000 andresmunguia/wize-andres-munguia:latest

```



### Functionality:

This API has 3 endpoints that can be used using this paths:

```
// POST endpoint to access database, retrieves user's role and create a JSON Web Token with it.
    // Example: $ curl -d "username=admin&password=secret" http://localhost:8000/login

http://localhost:8000/login
```
```
// GET endpoint, it decodes JSON Web Tokens and authenticate the user.
    
    //Example: 
        //$ curl -H 'Accept: application/json' -H "Authorization: Bearer ${TOKEN}" localhost:8000/protected   
    //If you are on Windows use this instead: 
        //$ curl -H 'Accept:application/json' -H "Authorization: Bearer ${TOKEN}" localhost:8000/protected

http://localhost:8000/protected

*The variable ${TOKEN} must be replaced by a valid JSON Web Token returned by the "/login" endpoint.
```
```
// GET endpoint, it checks API health.

http://localhost:8000/_health
```


----------------------------------------


For testing, you may use this script:

```

$ npm test

```

### CI Workflow

Using Git Actions I scripted a CI pipeline, every time there is a change on main branch this triggers and build a docker image, tags it and uploads it to my public Docker Hub repository.

```

https://hub.docker.com/r/andresmunguia/wize-andres-munguia

```


### Technologies used:


This API was created using:


Code languages used:
- NodeJS
- ExpressJS
- MySQL


Version Control:
- Git
- Docker


Automation:
- GitHub Actions


IDE:
- VS Code



### Additional notes:

Thanks so much for the opportunity, I learned a lot with this challenged and even had fun with it. I wanted to do more stuff like making secrets environment variables, also passing them to GitHub Secrets and adding the test cases to the CI pipeline but didn't have enough time since I was sick and wasted almost two weeks in bed. 

I hope my work meets your expectations, I look forward to receiving feedback, thank you very much.
