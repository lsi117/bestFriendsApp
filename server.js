const express = require('express')
const logger = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');


//starts the app
const app = express()
require('dotenv').config();



//configurations
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(methodOverride('_method'))
app.use(cookieParser());
//app.use(session({
  //secret: process.env.SECRET_KEY,         //this will be a secret key, remember a sk can be anything you want it to be
  //resave: false,
 // saveUninitialized: true,
//}));
app.use(passport.initialize());
app.use(passport.session());

//static config
app.use(express.static('public'))

//views config
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

//config port
const port = process.env.PORT || 3000;
app.listen(port,()=>{
  console.log(`alive on ${port}`)
})

//need to work on ROOT fldr for deployment
app.get('/',(req,res)=>{
  res.render('index', {
    auth: (req.user) ? true: false,
  })
})

const authRoutes = require('./routes/authRoute');
app.use('/auth', authRoutes);
const userRoutes = require('./routes/userRoute');
app.use('/user', userRoutes);

//route requires
const bfRoute = require('./routes/bfRoute.js')
app.use('/bfAllView',bfRoute) //URL PATH, the path NAME can be

//catchall
app.get('*',(req,res)=>{
  res.status(404).send('404 not found.')
})
