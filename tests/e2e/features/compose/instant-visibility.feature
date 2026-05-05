Feature: Compose submission instant visibility
  As a user sending messages
  I want my submitted text to appear instantly in the timeline
  So that I have immediate confirmation my message was received

  Background:
    Given I am authenticated and on the main chat
    And the timeline is visible

  Scenario: Typed message appears in timeline after pressing Enter
    When I type "Hello from E2E test" in the compose box
    And I press Enter
    Then the message "Hello from E2E test" should appear in the timeline
    And the timeline should scroll to show the new message
    And the compose box should be empty

  Scenario: Message appears within 1 second of submission
    When I type "Timing test" in the compose box
    And I note the current time
    And I press Enter
    Then the message should be visible in the timeline within 1000ms

  Scenario: Multiple rapid submissions all appear in order
    When I send "First message" and immediately send "Second message"
    Then both messages should appear in the timeline
    And "First message" should appear before "Second message"

  Scenario: Long multi-line message appears completely
    When I type a 5-line message in the compose box
    And I press Enter
    Then the full message should appear in the timeline
    And no text should be truncated

  Scenario: Message with file attachment appears with attachment indicator
    When I paste an image and type "See attached"
    And I press Enter
    Then the message should appear with an attachment indicator or thumbnail

  Scenario: Compose box clears after successful submission
    When I type "Clear test" and press Enter
    Then the compose box should be completely empty
    And the compose box should be focused and ready for input

  Scenario: Timeline scrolls to bottom on new message
    Given the timeline has enough messages to scroll
    And I scroll up in the timeline
    When I type "Scroll test" and press Enter
    Then the timeline should auto-scroll to show my new message at the bottom
