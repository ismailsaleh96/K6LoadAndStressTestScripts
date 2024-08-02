Feature: Load testing endpoint

  Scenario: Stress test endpoint
    Given I am a user
    When I load the endpoint
    Then I should receive a 200 status
