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

You may start the app by installing the dependencies first by using:

```

$npm install

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

// POST endpoint to access database, retrieve user's rol and create a JSON Web Token with it.
http://localhost:8000/login

// GET endpoint, it decodes JSON Web Tokens and authenticate the user.
http://localhost:8000/protected

// GET endpoint check API health.
http://localhost:8000/_health

```
