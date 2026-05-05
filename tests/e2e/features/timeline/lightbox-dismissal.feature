Feature: Lightbox dismissal
  As a user viewing attachments in the lightbox
  I want to dismiss it by any key press, click, or tap
  So that I can quickly return to the conversation without hunting for a close button

  Background:
    Given I am authenticated and on the main chat
    And a message with an image attachment is visible in the timeline

  Scenario: Escape key dismisses lightbox
    Given the lightbox is open showing an image
    When I press Escape
    Then the lightbox should close
    And the timeline should be visible again

  Scenario: Any key press dismisses lightbox
    Given the lightbox is open showing an image
    When I press any key (Space, Enter, letter, arrow)
    Then the lightbox should close

  Scenario: Click on backdrop dismisses lightbox
    Given the lightbox is open showing an image
    When I click on the dark backdrop area
    Then the lightbox should close

  Scenario: Click on the image itself dismisses lightbox
    Given the lightbox is open showing an image
    When I click directly on the image
    Then the lightbox should close

  Scenario: Tap anywhere on touch device dismisses lightbox
    Given the lightbox is open showing an image on a touch device
    When I tap anywhere on the screen
    Then the lightbox should close

  Scenario: Close button still works
    Given the lightbox is open
    When I click the Close button
    Then the lightbox should close

  Scenario: Lightbox does not reopen after dismissal
    Given I dismissed the lightbox by pressing a key
    Then the lightbox should remain closed
    And no flicker or re-render should occur
