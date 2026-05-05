Feature: Theme and tint commands
  As a power user who frequently customises the UI
  I want /theme and /tint to change the visual appearance reliably
  So that the colours I choose persist across sessions and refreshes

  Background:
    Given I am authenticated and on the main chat

  # ── /theme ──

  Scenario: /theme with no arguments shows available themes
    When I type "/theme" and press Enter
    Then the timeline should show a message containing "Available themes"

  Scenario: /theme ristretto applies dark theme visually
    When I type "/theme ristretto" and press Enter
    Then the page background color should change
    And data-theme should be "dark"
    And data-color-theme should be "ristretto"
    And CSS variable --bg-primary should be set
    And CSS variable --accent-color should be set
    And localStorage piclaw_theme should be "ristretto"
    And the timeline should show "Theme set to"

  Scenario: /theme default restores from ristretto visually
    Given the theme is set to "ristretto"
    When I type "/theme default" and press Enter
    Then the page background color should change back
    And data-color-theme should be "default"
    And CSS variables should be cleared (untinted default)
    And localStorage piclaw_theme should be "default"

  Scenario: /theme dark returns error — not a valid theme name
    When I type "/theme dark" and press Enter
    Then the theme should not change
    And the timeline should show "Unknown theme"

  Scenario: /theme survives page refresh
    Given the theme is set to "ristretto"
    When I refresh the page
    Then data-theme should still be "dark"
    And localStorage piclaw_theme should be "ristretto"

  # ── /tint (default theme only) ──

  Scenario: /tint hex changes accent and background on default theme
    Given the theme is "default" with no tint
    When I type "/tint #e11d48" and press Enter
    Then data-tint should be "#e11d48"
    And CSS variable --bg-primary should be set (not pure white)
    And CSS variable --accent-color should be set
    And localStorage piclaw_tint should contain "e11d48"
    And the timeline should show "Tint set to"

  Scenario: /tint named color works on default theme
    Given the theme is "default" with no tint
    When I type "/tint orange" and press Enter
    Then data-tint should be "orange"
    And CSS variables should be applied
    And localStorage piclaw_tint should be "orange"

  Scenario: Switching tints visibly changes accent color
    Given the theme is "default" with tint "#e11d48"
    When I type "/tint #3b82f6" and press Enter
    Then --accent-color should differ from the previous tint
    And --bg-primary should differ from the previous tint

  Scenario: /tint off clears tint and restores vanilla default
    Given the theme is "default" with tint "#3b82f6"
    When I type "/tint off" and press Enter
    Then data-tint should be empty
    And CSS variables should be cleared
    And the timeline should show "Tint cleared"

  Scenario: /tint with no args shows usage
    When I type "/tint" and press Enter
    Then the timeline should show "Usage"

  Scenario: /tint invalid value returns error
    When I type "/tint $$notacolor" and press Enter
    Then the tint should not change
    And the timeline should show "Invalid tint"

  Scenario: /tint survives page refresh
    Given the theme is "default" with tint "#e11d48"
    When I refresh the page
    Then data-tint should be set
    And CSS variable --bg-primary should be reapplied

  # ── Theme + tint interaction ──

  Scenario: Tint on default, switch to ristretto, switch back
    Given the theme is "default" with tint "#e11d48"
    When I type "/theme ristretto" and press Enter
    Then data-color-theme should be "ristretto"
    When I type "/theme default" and press Enter
    Then data-color-theme should be "default"
    And data-tint should be empty (theme switch clears tint)

  Scenario: /tint on ristretto switches to default+tint
    Given the theme is set to "ristretto"
    When I type "/tint #3b82f6" and press Enter
    Then data-color-theme should be "default" (tint forces default)
    And data-tint should be "#3b82f6"

  Scenario: Round-trip visual consistency
    Given the theme is "default" with no tint
    And I note the background color
    When I apply tint "#e11d48"
    Then the background should differ from the noted color
    When I switch to "/theme ristretto"
    Then the background should differ again
    When I switch back to "/theme default"
    Then the background should match the original noted color
