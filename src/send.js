const request = require("request");
const nylasApiUrl = 'https://api.nylas.com';
const send = (body, subject, token, sender, recipient) => {
    const options = {
        method: 'POST',
        url: nylasApiUrl + '/send',
        headers:
            {
                authorization: token
            },
        body:
            {
                subject: subject,
                from: sender,
                to: recipient,
                body: body
            },
        json: true
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.error(body);
    });
};

module.exports = {
    send
};