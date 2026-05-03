Feature: Settings dialog
  As a user
  I want settings to open instantly and save reliably
  So that I can configure the app without frustration

  Background:
    Given I am authenticated and on the main chat

  # Regression: fix(web): settings open race conditions (5+ fixes)
  Scenario: Rapid shortcut presses open exactly one settings dialog
    When I press Cmd+Comma three times quickly
    Then exactly one settings dialog should be visible
    And no duplicate dialogs should exist in the DOM

  # Regression: fix(web): cache settingsData across dialog open/close
  Scenario: Second settings open is instant
    When I open settings
    And I close settings
    And I open settings again
    Then the settings dialog should appear within 100ms
    And no loading spinner should be visible

  # Regression: fix(web): defer settings dialog heavy work
  Scenario: Settings shows loading shell then content
    When I open settings for the first time
    Then a loading shell should appear immediately
    And within 2 seconds the General pane should be visible

  # Regression: fix(web): allow free-typed numbers in settings stepper fields
  Scenario: User can type a number in stepper fields
    Given I am on the General settings pane
    When I click on the context window size field
    And I clear the field
    And I type "128000"
    Then the field should display "128000"
    And the value should be persisted

  # Regression: fix(web): truly lazy settings — only General loads on open
  Scenario: Non-General panes load only on click
    When I open settings
    Then only the General pane content should be loaded
    When I click on the Models nav item
    Then the Models pane should load and render
    And General pane should remain cached
