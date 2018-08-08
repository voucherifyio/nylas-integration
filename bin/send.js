const apiClient = require('../src/NylasApiClient');

apiClient.email(
    "<html>Hiho</html>",
    "Subject",
    process.env.NYLAS_ACCESS_TOKEN,
    [
        {
            name: 'Marek Szymeczko from Nylas',
            email: 'marek.szymeczko@rspective.pl'
        }
    ],
    [
        {
            name: 'Marek Szymeczko',
            email: 'szymeczkomarek@gmail.com'
        }
    ]
).then(res => {
    console.log(res);
}).catch(err => {
    console.error(err);
});