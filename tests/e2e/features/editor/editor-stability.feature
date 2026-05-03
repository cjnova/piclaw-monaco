Feature: Editor pane
  As a user
  I want the code editor to be stable and responsive
  So that I can edit files without fighting the UI

  Background:
    Given I am authenticated and on the main chat
    And the workspace explorer is visible

  # Regression: fix(editor): stop editor flicker caused by unstable callback deps
  Scenario: Switching files does not cause visible flicker
    Given I have file "notes/a.md" open in the editor
    When I click on "notes/b.md" in the workspace explorer
    Then the editor should transition smoothly to the new file
    And no flash of blank content should occur

  # Regression: fix(editor): confirm before closing dirty tabs in all close paths
  Scenario: Closing an unsaved tab shows confirmation
    Given I have a file open in the editor
    And I have made unsaved changes
    When I click the close button on the tab
    Then a confirmation dialog should appear
    And choosing "Don't save" should close without saving
    And choosing "Cancel" should keep the tab open

  # Regression: fix(web): activate editor tabs on press
  Scenario: Clicking a tab activates it immediately
    Given I have two files open in editor tabs
    When I mouse-down on the inactive tab
    Then the tab should activate immediately (not wait for mouse-up)
    And the editor content should switch to that file

  # Regression: fix(editor): stop preview flicker + add resizable splitter
  Scenario: Markdown preview is stable during splitter resize
    Given I have a markdown file open with preview enabled
    When I drag the splitter between editor and preview
    Then neither pane should flicker or go blank during drag
    And the split ratio should persist after release

  # Regression: fix(zen): eliminate CPU spike from hover-reveal
  Scenario: Zen mode does not spike CPU on hover
    Given I am in zen mode editing a file
    When I move my mouse across the editor area
    Then CPU usage should not spike above baseline + 10%
    And no layout thrashing should occur
