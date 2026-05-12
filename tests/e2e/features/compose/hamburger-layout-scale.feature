Feature: Hamburger menu items and workspace state
  As a user
  I want the hamburger menu to show the right items with correct enabled/disabled state
  So that I can access workspace actions that are actually available

  Background:
    Given I am authenticated and on the main chat

  Scenario: Menu contains New file, Refresh tree, Reindex workspace
    When I open the hamburger menu
    Then the menu should contain "New file"
    And the menu should contain "Refresh tree"
    And the menu should contain "Reindex workspace"

  Scenario: Menu contains hidden files toggle
    When I open the hamburger menu
    Then the menu should contain a hidden files toggle

  Scenario: Workspace items disabled in chat-only mode
    Given no workspace is open
    When I open the hamburger menu
    Then "New file", "Refresh tree", "Reindex workspace" should be disabled

  Scenario: Terminal dock toggle hidden when editor not open
    Given no file is open in the editor
    When I open the hamburger menu
    Then the terminal dock toggle should not appear

  Scenario: Terminal and VNC items enabled when workspace available
    When I open the hamburger menu
    Then terminal and VNC items should be enabled (not greyed out)


Feature: Safe area and layout fixes
  As a PWA user on a device with a notch or status bar
  I want the UI to respect safe area insets
  So that controls are not hidden behind the notch

  Scenario: Compose box spans full width
    Then the compose surface should be at least 80% of viewport width

  Scenario: Hamburger button visible and above safe area
    Then the hamburger button should be within viewport bounds

  Scenario: Tab close does not activate tab
    Given I have two editor tabs open
    When I click the close button on the inactive tab
    Then the previously active tab should remain active


Feature: PWA display scale
  As a mobile user
  I want to adjust the display scale from the menu
  So that text is readable at my preferred size

  Scenario: Menu contains display scale control
    When I open the hamburger menu
    Then a zoom/scale control should be visible

  Scenario: Inline code in editor preview is monospaced
    Given an editor preview is showing markdown with inline code
    Then inline code should render in a monospace font
