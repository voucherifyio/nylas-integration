const express = require('express');
const apiClient = require('./src/NylasApiClient');
const app = express();
const router = express.Router();

app.use(express.static(__dirname + '/public'));

router.get('/token/:code', (request, response) => {
    apiClient.accessToken(request.params.code).then(res => {
        response.json(res);
    }).catch(err => {
        console.error('Error occured when trying to fetch access Token');
        console.error(err);
        response.json('');
    })
});

app.use('/api', router);
app.listen(3000);
console.log('frontend at localhost:3000');