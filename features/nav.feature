
Feature: Navigation from page to page without actually changing pages.
  Background:
    Given no session

  @javascript
  Scenario: move from page to page
    Given I am on the home page
    Then page1 content should be seen
    When I click on the page2 navigation link
    Then page2 content should be seen
    When I click on the page3 navigation link
    Then page3 content should be seen
