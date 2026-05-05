Feature: Message deletion from timeline
  As a user managing conversation history
  I want to delete messages and their cascading thread replies
  So that I can clean up the timeline without leaving orphaned replies

  Background:
    Given I am authenticated and on the main chat
    And the timeline contains messages

  # ── Single message deletion ──

  Scenario: Delete a single message without replies
    Given a message with no thread replies exists
    When I click the delete button on that message
    Then the message should animate out of the timeline
    And the message should be removed from the DOM
    And refreshing the page should not show the deleted message

  Scenario: Delete button requires click (no accidental trigger)
    When I hover over a message
    Then the delete button should be visible in the action bar
    But accidentally dragging or swiping should NOT trigger deletion

  # ── Cascading thread deletion ──

  Scenario: Delete a message with thread replies shows confirmation
    Given a message that has 3 thread replies exists
    When I click the delete button on the parent message
    Then a confirmation dialog should appear
    And the dialog should mention "3 replies"

  Scenario: Confirming cascade deletes parent and all replies
    Given a message that has thread replies exists
    When I click the delete button on the parent message
    And I confirm the cascade deletion
    Then the parent message should be removed from the timeline
    And all thread replies should be removed from the timeline
    And no orphaned replies should remain

  Scenario: Cancelling cascade preserves all messages
    Given a message that has thread replies exists
    When I click the delete button on the parent message
    And I cancel the confirmation dialog
    Then the parent message should still be visible
    And all thread replies should still be visible

  # ── Server-detected replies fallback ──

  Scenario: Backend detects replies not visible in client
    Given a message appears to have no replies in the current view
    But the server has replies in the database
    When I click the delete button
    And the server responds with "Replies exist"
    Then a second confirmation should appear asking about replies
    And confirming should delete the message and its server-side replies

  # ── Edge cases ──

  Scenario: Delete last message in timeline
    Given only one message remains in the timeline
    When I delete that message
    Then the timeline should be empty
    And no errors should appear

  Scenario: Delete message with media attachments
    Given a message with an attached image exists
    When I delete that message
    Then the message should be removed
    And the media attachment should be cleaned up (not leaked)

  Scenario: Deleted messages stay deleted after refresh
    Given I have deleted a message
    When I refresh the page
    Then the deleted message should not reappear in the timeline
