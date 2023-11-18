let axios = require('axios')
let axiosRetry = require('axios-retry')

function originalExponentialDelay(retryNumber = 0, error, delayFactor = 100) {
  const delay = Math.pow(2, retryNumber) * delayFactor;
  const randomSum = delay * 0.2 * Math.random(); // 0-20% of the delay
  return delay + randomSum;
}

/*
Google Java HTTP Client Library starts at 0.5 seconds and has a multiplier of 1.5,
and adds or subtracts a 50% jitter.
usually: 0.5, 0.75, 1.125, 1.687, 2.53, 3.795, 5.692, 8.538, 12.807, 19.210

https://cloud.google.com/java/docs/reference/google-http-client/1.43.0/com.google.api.client.util.ExponentialBackOff
*/

function googleExponentialDelay(retryNumber = 0, error, delayFactor = 500) {
  let delay = Math.pow(1.5, retryNumber - 1) * delayFactor
  let jitter = delay * 0.5 * Math.random() // random 0-50% of the delay
  jitter *= Math.round(Math.random()) ? 1 : -1 // add or substract the delay
  // console.log(retryNumber, "delay", delay/1000, "jitter", jitter/1000, "total", (delay + jitter) / 1000 )
  return delay + jitter
}

axiosRetry(axios, {
  retries: 10,
  retryDelay: googleExponentialDelay,
});

axios.get('https://httpbin.org/status/500')
  .then(result => {
    console.log('success')
  }).catch(error => { // The first request fails
    console.log('error')
  });
