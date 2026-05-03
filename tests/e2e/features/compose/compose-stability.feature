Feature: Compose box stability
  As a user
  I want the compose box to behave predictably
  So that I can focus on writing rather than fighting the UI

  Background:
    Given I am authenticated and on the main chat

  # Regression: fix(web): rollback cursor on already-processing errors
  Scenario: Cursor does not jump back when sending while agent is busy
    Given the agent is currently processing a turn
    When I type "follow up question" in the compose box
    And I press Enter to send
    Then the compose box should be empty
    And my cursor should remain in the compose box
    And the message should appear in the queue

  # Regression: fix(web): keep send button on the right
  Scenario: Send button remains rightmost
    When I focus the compose box
    Then the send button should be the rightmost element in the compose row

  # Regression: fix(web): stop mobile compose jumps
  @mobile
  Scenario: Compose box does not jump on iOS keyboard open
    When I tap the compose box
    And the virtual keyboard opens
    Then the compose box should remain visible above the keyboard
    And the timeline should scroll to keep the last message visible

  # Regression: fix(web): allow pulling back steering queue items for editing
  Scenario: User can pull back a queued message for editing
    Given the agent is currently processing a turn
    And I have sent a message that is queued
    When I click the edit button on the queued message
    Then the queued message text should appear in the compose box
    And the queue item should be removed

  # Regression: fix(web): enlarge compose stop icon
  Scenario: Stop button is visually prominent during agent activity
    Given the agent is currently processing a turn
    Then the stop button should be visible
    And the stop button should have a minimum tap target of 44x44 pixels
