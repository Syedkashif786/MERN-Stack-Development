// importing express
const express = require('express');
const userRouter = require('./Routers/userRouter');
const videoRouter = require('./Routers/videoRouter');
const cors = require('cors');

// initiliazing express
const app = express();

const port = 5000;

// this will parse JSON data to javascript
app.use(express.json());
app.use(cors({ origin : [ 'http://localhost:3000' ]}));

// middleware : to process request and do not send response.
app.use('/user', userRouter);
app.use('/video', userRouter);

// route : to process request and send response.
app.get( '/', (req, res) => {
    res.send('Response from express');
})

// route or endpoint
app.get( '/home', (req, res) => {
    res.send('Response from home');
})

app.listen( port, () => {
    console.log('server has started');
});