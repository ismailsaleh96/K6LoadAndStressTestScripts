import { run } from 'k6-cucumber';

run({
  featureFiles: ['features/load_test.feature'],
  stepDefinitions: 'features/step_definitions/steps.js',
  options: {
    stages: [
      { duration: '30s', target: 100 }, // Ramp-up to 100 users over 30 seconds
      { duration: '1m', target: 100 },  // Stay at 100 users for 1 minute
      { duration: '30s', target: 0 },   // Ramp-down to 0 users over 30 seconds
    ],
  },
});