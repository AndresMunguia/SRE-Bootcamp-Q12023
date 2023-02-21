FROM node:18.13.0
WORKDIR /src
COPY . .
RUN npm install
CMD npm start
EXPOSE 8000

# App must run on port 8000
# Add your instructions to dockerize the application