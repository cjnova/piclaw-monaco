Feature: Session switching
  As a user
  I want to switch between chat sessions reliably
  So that I never see messages from the wrong session

  Background:
    Given I am authenticated and on the main chat
    And I have at least two chat sessions

  # Regression: fix(web): clear posts on session switch to prevent cross-session timeline merge
  Scenario: Switching sessions shows only target session messages
    Given I am viewing session "Alpha" with messages
    When I switch to session "Beta"
    Then the timeline should show only messages from "Beta"
    And no messages from "Alpha" should be visible

  # Regression: fix(web): block session swipe on message content
  Scenario: Horizontal swipe on message text does not switch session
    When I perform a horizontal swipe gesture on a message bubble
    Then the session should not change
    And the message content should not scroll horizontally

  # Regression: fix(web): exclude Apple Pencil from chat swipe navigation
  @ipad
  Scenario: Apple Pencil does not trigger session swipe
    When I perform a horizontal stroke with Apple Pencil on the timeline
    Then the session should not change

  # Regression: fix(web): restore session swipe on iPad
  @ipad
  Scenario: Finger swipe switches sessions on iPad
    When I perform a horizontal finger swipe on the timeline edge
    Then the session should switch to the adjacent session

  # Regression: fix(web): sort session popup alphabetically, active session first
  Scenario: Session popup shows active session first, then alphabetical
    When I open the session switcher popup
    Then the first item should be the current active session
    And the remaining items should be sorted alphabetically

  # Regression: fix(web): allow archiving non-default root sessions
  Scenario: Non-default sessions can be archived
    Given I have a session named "Temporary"
    When I open the context menu for "Temporary"
    Then the archive option should be available
    When I click archive
    Then "Temporary" should move to the archived section
