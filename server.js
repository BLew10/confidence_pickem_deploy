
//This imports the express module, which provides a set of methods for creating web servers and handling HTTP requests.
const express = require('express');
//This imports the cookie-parser module, which is a middleware that parses cookies attached to the client request object.
const cookieParser = require('cookie-parser');

// This imports the dotenv module and loads environment variables from a .env file. This allows to use environment variables in the application
require('dotenv').config();

// This imports the cors module, which is a middleware that handles CORS (Cross-Origin Resource Sharing) requests.
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

//This creates an instance of an express application.
const app = express();

//This line is requiring the mongoose configuration file, this file contains the configurations that are needed to connect to the MongoDB database and it should be placed in the specified directory path.
require('./server/config/mongoose.config'); 

// This line is adding the cookie-parser middleware to the application, it will parse the cookies attached to the client request object.
app.use(cookieParser())

// This line is adding the cors middleware to the application, it will handle CORS (Cross-Origin Resource Sharing) requests. It passes the corsOptions that have been previously defined
app.use(cors(corsOptions))

//  This line is adding a middleware that allows the application to parse json payload in the body of the HTTP requests
app.use(express.json()); 

app.use(express.urlencoded({ extended: true })); 

// This line is requiring the file containing the routes for handling week's routes and passing the app instance to it.
require('./server/routes/week.routes')(app);
require('./server/routes/league.routes')(app);
require('./server/routes/user.routes')(app);
app.listen(8000, () => {console.log("Listening at Port 8000")})




