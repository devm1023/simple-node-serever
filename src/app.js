require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();


app.set('views', __dirname + '/template')
app.set('view engine', 'ejs');

router.get('/', function(req, res){
    res.render('index', {
        url: process.env.API_GATEWAY_URL,
        bucket: process.env.BUCKET_NAME
    });
});

app.use('/', router);


const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`🚀 Server ready at ${port}`);
});
