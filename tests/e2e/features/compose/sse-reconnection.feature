Feature: SSE reconnection and recovery
  As a user
  I want the app to recover gracefully from network interruptions
  So that I never lose messages or see stale state

  Background:
    Given I am authenticated and on the main chat

  # Regression: fix(web): force SSE reconnect after iOS resume (#65)
  @mobile
  Scenario: App reconnects after iOS background/foreground cycle
    Given the app is connected via SSE
    When the app is backgrounded for 30 seconds
    And the app is foregrounded
    Then the SSE connection should re-establish within 5 seconds
    And the agent status indicator should show correct state

  # Regression: fix(web): resync after SSE reconnect before replaying deltas (#115)
  Scenario: Messages sent during disconnect appear after reconnect
    Given the app is connected via SSE
    And the agent is processing a turn
    When the SSE connection drops
    And the agent completes the turn while disconnected
    And the SSE connection re-establishes
    Then the completed response should appear in the timeline
    And no duplicate messages should exist

  # Regression: fix(web): disable auto-reload on version drift
  Scenario: Version drift shows notice but does not auto-reload
    Given the app is connected via SSE
    When the server broadcasts a version change event
    Then a version update notice should appear
    But the page should NOT automatically reload
    And no reload loop should occur

  # Regression: fix(web): restore active status on reconnect
  Scenario: Agent status indicator correct after reconnect
    Given the agent is idle
    And the SSE connection drops and recovers
    Then the agent status should show "idle" not "connecting"
    And the compose box should be interactive

  # Regression: fix(web): refresh queue state on SSE reconnect
  Scenario: Queue state refreshes after reconnect
    Given I have messages in the steering queue
    And the SSE connection drops and recovers
    Then the queue should display the correct pending messages
    And no stale queue items should be visible
