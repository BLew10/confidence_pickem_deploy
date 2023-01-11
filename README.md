# Play Action Picks 
- A gamified NFL pick’em platform where friends can compete to see who’s the best at selecting which teams will win each week.
 
## Installation and Set Instructions 
- Clone this repository via this command
```
git clone https://github.com/BLew10/confidence_pickem_deploy.git
```

- You will need *node* and *npm* installed globally

**Installation of Backend Packages**
```
npm install
```

**Installation of Frontend Packages:** 
```
cd client
npm install
```
**To Run Test Suite:**
```
npm test
```
**To Start Frontend Server:**
- Confirm you are in the client directory
```
npm start
```
**To Visit App:**
```
localhost:3000
```

**To run the Backend Server:**
- You'll need to cd out of the client folder
```
cd ..
```
- Run Server:
```
node server.js
```

## Reflection
- This was a one week long project that was for the MERN stack portion of the Coding Dojo bootcamp. 
- Growing up I played a similar game via a custom Excel Sheet I made. I decided to use my new skills to build the game via a web application.
- The goal was to make a MVP of the pick'em game and familiarize myself with the robust library that is React and the get comfortable with MongoDB. 
- Prior to this, I had no experience with a non-relational databases. One of the main challenges I had was conceptualizing how the data should be stored and then putting that into practice. MongoDB is extremely flexible and dynamic. I was able to leverage the flexibilty to my advantage in multiple instances by getting creative with data storage and manipulation.
- The technologies used are MongoDB, Express, React, Node, Mongoose, JsonWebToken, bcrypt, Tailwind, Axios
