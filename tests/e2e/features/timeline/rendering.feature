Feature: Timeline rendering
  As a user
  I want messages to render correctly and consistently
  So that I can read content without layout glitches

  Background:
    Given I am authenticated and on the main chat

  # Regression: fix(web): prevent first-column collapse in markdown tables
  Scenario: Markdown tables render with proper column widths
    Given the agent has posted a message containing a markdown table
    Then all table columns should have a minimum visible width
    And the first column should not collapse to zero width

  # Regression: fix(web): fix bunched table columns
  Scenario: Multi-column tables use proper table layout
    Given the agent has posted a message with a 4-column table
    Then the table should use display:table layout
    And columns should distribute width proportionally

  # Regression: fix(web): pin code copy control to code block corner
  Scenario: Code blocks have a copy button in the corner
    Given the agent has posted a message with a code block
    When I hover over the code block
    Then a copy button should appear in the top-right corner
    When I click the copy button
    Then the code content should be in my clipboard

  # Regression: fix(web): open external links in new tab
  Scenario: External links open in new tab
    Given the agent has posted a message with an external URL
    When I click the external link
    Then a new tab should open with that URL
    And the current tab should remain on PiClaw

  # Regression: fix(web): render response outcome pills after timestamps
  Scenario: Outcome pills appear after timestamps
    Given the agent has completed a turn
    Then the outcome pill should render after the timestamp
    And they should be on the same line

  # Regression: fix(web): remove duplicate module import that caused double timeline render
  Scenario: Timeline renders exactly once on initial load
    Given I load the app fresh
    Then the timeline should contain each message exactly once
    And no visual flicker should occur during load
