const { Given, When, Then } = require('@cucumber/cucumber');
const { check, sleep } = require('k6');
const http = require('k6/http');

let response;

Given('I am a user', function () {
  // Setup code if needed
});

When('I load the endpoint', function () {
  response = http.get('https://jsonplaceholder.typicode.com/posts'); 
});

Then('I should receive a 200 status', function () {
  check(response, {
    'status is 200': (r) => r.status === 200,
  });
  sleep(1);
});