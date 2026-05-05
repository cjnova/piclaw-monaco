Feature: Settings dialog layering
  As a user opening settings while the workspace pane is visible
  I want the settings backdrop to be partially opaque and above all other elements
  So that only the settings dialog is interactive and the rest is dimmed

  Background:
    Given I am authenticated and on the main chat

  Scenario: Settings backdrop covers workspace pane
    Given the workspace explorer is open
    When I open the settings dialog
    Then a semi-transparent backdrop should be visible
    And the backdrop should cover the workspace pane
    And the workspace pane should not be clickable through the backdrop

  Scenario: Settings dialog is above all other elements
    Given the workspace explorer is open
    When I open the settings dialog
    Then the settings dialog z-index should be above the workspace z-index
    And the settings dialog should be fully visible (not clipped)

  Scenario: Backdrop is partially opaque (not fully transparent or opaque)
    When I open the settings dialog
    Then the backdrop background should have opacity between 0.3 and 0.8
    And the content behind should be dimmed but partially visible

  Scenario: Only settings dialog is interactive above the backdrop
    Given the workspace explorer is open
    And I open the settings dialog
    When I try to click a workspace file
    Then the click should not reach the workspace
    When I click the settings close button
    Then the settings should close
    And the workspace should become interactive again
