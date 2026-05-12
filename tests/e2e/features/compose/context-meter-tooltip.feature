Feature: Context meter tooltip
  As a user monitoring context usage
  I want to see the current token values when I hover over the context meter
  So that I know exactly how much context I'm using

  Background:
    Given I am authenticated and on the main chat
    And the context meter (pie) is visible in the compose bar

  Scenario: Hover shows tooltip with token counts and percentage
    When I hover over the context meter
    Then a tooltip should appear showing "Context: XK / YK tokens (Z%)"
    And the tooltip should include both used and total token counts
    And the percentage should match the visual fill of the pie

  Scenario: Tooltip updates after agent turn
    Given the context meter shows a value
    When the agent completes a turn
    Then the tooltip values should update to reflect new usage

  Scenario: Tooltip shows compact action hint when not compacting
    When I hover over the context meter
    Then the tooltip should include "Compact context"

  Scenario: Tooltip shows compaction status during compaction
    Given compaction is in progress
    When I hover over the context meter
    Then the tooltip should show the compaction title and elapsed time
    And it should NOT show "Compact context"
