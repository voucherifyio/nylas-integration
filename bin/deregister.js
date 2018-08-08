const apiClient = require('../src/NylasApiClient');

apiClient.deregister('7r5lhuy0qije97bsuhjftlrq3').then(res => {
    console.log('User deregistered!');
    apiClient.register('7r5lhuy0qije97bsuhjftlrq3').then(res => {
        console.log('User registered!');
    }).catch(err => {
        console.log('Could not register due to error:');
        console.error(err);
    });
}).catch(err => {
    console.log('Could not deregister due to error:');
    console.error(err);
});