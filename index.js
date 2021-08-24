const express = require('express');
const basicAuth = require('express-basic-auth');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');


const app = express();

app.use(cors({ 
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(cookieParser());
app.use(session({
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
    secret: '1232abbc1a23123f123e123a'
}));

app.use(express.json());

let Users = [{id: 'admin', password: 'supersecret'}];
// app.use(basicAuth({
//     authorizer: (username, password) => {
//         const userMatches = basicAuth.safeCompare(username, 'admin')
//         const passwordMatches = basicAuth.safeCompare(password, 'supersecret')
//         return userMatches & passwordMatches
//     },
//     unauthorizedResponse: (req) => {
//         return `unauthorized. ip: ${req.ip}`
//     }
// }))

app.post('/login', (req,res,next) => {
    Users.filter(user => {
        const userMatches = basicAuth.safeCompare(req.body.username, user.id)
        const passwordMatches = basicAuth.safeCompare(req.body.password, user.password)
        if (userMatches && passwordMatches){
            req.session.user = user;
            console.log(req.session)
            res.json('logged in')
        }
    })
})


app.get('/api', (req,res,next) => {
    console.log(req.session)
    if(req.session.user){
        res.json(req.session.user.id)
    } else {
        res.json('not logged in')
    }
})


app.listen(3001);