import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '30s', target: 150 }, // Ramp-up to 150 users over 30 seconds
    { duration: '1m', target: 150 },  // Stay at 150 users for 1 minute
    { duration: '30s', target: 0 },   // Ramp-down to 0 users over 30 seconds
  ],
};

export default function () {
  const res = http.get('https://jsonplaceholder.typicode.com/posts'); // Replace with your endpoint
  check(res, {
    'status is 200': (r) => r.status === 200,
  });
  sleep(1);
}
