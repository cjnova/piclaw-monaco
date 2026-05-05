Feature: Session swipe navigation independence
  As a mobile user
  I want to swipe between sessions regardless of which UI elements are visible
  So that session navigation works consistently no matter what pane is open

  Background:
    Given I am authenticated and on the main chat on a touch device
    And I have at least two chat sessions

  Scenario: Swipe works on the timeline area
    When I perform a horizontal finger swipe on the timeline
    Then the session should switch to the adjacent session

  Scenario: Swipe works when workspace explorer is visible
    Given the workspace explorer is open
    When I perform a horizontal finger swipe on the timeline area
    Then the session should switch (explorer visibility does not block)

  Scenario: Swipe works when editor pane is visible
    Given a file is open in the editor pane
    When I perform a horizontal finger swipe on the timeline area
    Then the session should switch (editor visibility does not block)

  Scenario: Swipe works when terminal dock is visible
    Given the terminal dock is open below the editor
    When I perform a horizontal finger swipe on the timeline area
    Then the session should switch

  Scenario: Swipe is blocked only by active text inputs
    Given I am focused in the compose box (typing)
    When I perform a horizontal swipe gesture
    Then the session should NOT switch (compose is interactive)

  Scenario: Swipe is blocked inside the editor content area
    Given I am focused in the editor content area
    When I perform a horizontal swipe on the editor
    Then the session should NOT switch (editor handles its own gestures)

  Scenario: Swipe works on agent thinking panels
    Given the agent thinking panel is showing
    When I perform a horizontal finger swipe on the thinking panel
    Then the session should switch (thinking panels pass through)

  Scenario: Swipe indicator appears during gesture
    When I start a horizontal swipe gesture
    Then a visual swipe indicator should appear
    And it should show the adjacent session name
    When I complete the swipe past the threshold
    Then the session should switch
    And the indicator should fade out
