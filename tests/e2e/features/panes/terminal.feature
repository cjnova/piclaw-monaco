Feature: Terminal pane — standalone mode
  As a user
  I want to open a terminal pane without garbled display
  And manage it via tab controls and keyboard shortcuts
  So that I can run commands alongside the chat

  Background:
    Given I am authenticated and on the main chat

  Scenario: Open terminal standalone without garbled output
    When I open a terminal pane
    Then the terminal should render without garbled characters
    And a blinking cursor should be visible
    And the terminal background should match the theme

  Scenario: Execute ls -al in terminal
    Given a terminal pane is open
    When I type "ls -al" and press Enter in the terminal
    Then the terminal should display file listing output
    And the output should contain column-aligned permissions and filenames

  Scenario: Terminal opens clean without IME active
    Given a terminal pane is freshly opened
    Then no IME composition should be active
    And the input mode should not be CJK
    And typing plain ASCII "echo test123" should produce exactly that text
    And no CJK composition artifacts should appear in the output

  Scenario: Close terminal via tab close button (click)
    Given a terminal pane is open as a tab
    When I click the close button on the terminal tab
    Then the terminal tab should disappear
    And no terminal content should remain visible

  Scenario: Close terminal via tab close button (tap)
    Given a terminal pane is open as a tab on a touch device
    When I tap the close button on the terminal tab
    Then the terminal tab should disappear

  Scenario: Pop out terminal to new window (desktop)
    Given a terminal pane is open as a tab
    When I click the pop-out button on the terminal tab
    Then the terminal should open in a separate window or tab
    And the original tab should show a "reattach" placeholder

  Scenario: Terminal theme matches UI theme
    Given a terminal pane is open
    When I change the UI theme to "ristretto"
    Then the terminal foreground and background colors should update
    And the terminal should remain interactive


Feature: Terminal dock — beneath editor
  As a user editing files
  I want a terminal docked below the editor
  So that I can run commands while viewing code

  Background:
    Given I am authenticated and on the main chat
    And a file is open in the editor

  Scenario: Toggle terminal dock via keyboard shortcut
    When I press Ctrl+Backtick
    Then the terminal dock should appear below the editor
    And the dock should have a visible splitter handle
    When I press Ctrl+Backtick again
    Then the terminal dock should hide

  Scenario: Toggle terminal dock via tab strip button
    When I click the terminal dock toggle button in the tab strip
    Then the terminal dock should appear below the editor
    When I click the toggle button again
    Then the terminal dock should hide

  Scenario: Dock splitter resizes terminal height
    Given the terminal dock is visible below the editor
    When I drag the dock splitter upward
    Then the terminal dock should grow in height
    And the editor should shrink proportionally
    When I drag the dock splitter downward
    Then the terminal dock should shrink
    And the editor should grow

  Scenario: Terminal dock is interactive alongside editor
    Given the terminal dock is visible below the editor
    When I type "echo hello" in the terminal dock
    Then the terminal should show "hello" in its output
    When I click on the editor
    And I type "test" in the editor
    Then the editor should receive the input (not the terminal)

  Scenario: Dock hidden in zen mode
    Given the terminal dock is visible below the editor
    When I enter zen mode (Ctrl+Shift+Z)
    Then the terminal dock should be hidden
    And the dock splitter should be hidden


Feature: Terminal zen mode
  As a user wanting focused terminal work
  I want zen mode to show only the terminal
  With a permanently visible exit indicator

  Background:
    Given I am authenticated and on the main chat

  Scenario: Zen mode hides all chrome except the terminal/editor
    Given a terminal pane is open standalone
    When I enter zen mode
    Then the workspace sidebar should be hidden
    And the chat container should be hidden
    And the editor/terminal should fill the viewport

  Scenario: Zen mode has permanently visible exit indicator
    Given I am in zen mode
    Then a zen exit indicator should be visible in the top-right corner
    And the indicator should be clickable
    And the indicator should have a minimum tap target of 44x44 pixels

  Scenario: Clicking zen exit indicator reverts to normal layout
    Given I am in zen mode
    When I click the zen exit indicator
    Then the workspace sidebar should reappear
    And the chat container should reappear
    And the editor/terminal should return to its normal width

  Scenario: Escape key exits zen mode
    Given I am in zen mode
    When I press Escape
    Then zen mode should deactivate
    And the normal layout should restore

  Scenario: Hover-reveal tab strip in zen mode
    Given I am in zen mode
    Then the tab strip should be hidden by default
    When I hover near the top edge of the viewport
    Then the tab strip should fade in
    When I move the mouse away from the top
    Then the tab strip should fade out
