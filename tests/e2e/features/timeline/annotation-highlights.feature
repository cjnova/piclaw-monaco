Feature: Image annotation (iPad)
  As an iPad user reviewing agent output
  I want to annotate images inline with Apple Pencil or touch
  So that I can mark up diagrams and screenshots without leaving the app

  Background:
    Given I am authenticated and on the main chat
    And the timeline contains a message with an image

  Scenario: Annotation overlay appears on image tap (iPad)
    Given I am on an iPad (maxTouchPoints > 1)
    When I tap an image in the timeline
    Then an annotation toolbar should appear
    And the toolbar should contain pen, highlighter, arrow, rectangle, text, eraser, undo tools

  Scenario: Annotation canvas overlays the image
    Given the annotation overlay is open
    Then a transparent canvas should cover the image
    And the canvas should be the same dimensions as the image

  Scenario: Drawing with pen tool produces visible strokes
    Given the annotation overlay is open
    And the pen tool is selected
    When I draw a stroke on the canvas
    Then the stroke should be visible on the overlay canvas

  Scenario: Undo removes the last annotation
    Given I have drawn a stroke on the canvas
    When I tap the undo button
    Then the last stroke should be removed

  Scenario: Send exports composited PNG
    Given I have drawn annotations on an image
    When I tap Send
    Then a composited PNG should be uploaded
    And the annotated image should appear in the timeline

  Scenario: Discard closes overlay without saving
    Given I have drawn annotations on an image
    When I tap Discard
    Then the overlay should close
    And no annotated image should be sent

  Scenario: Annotation is gated to iPad only
    Given I am on a desktop browser (maxTouchPoints = 0)
    When I click an image in the timeline
    Then the annotation overlay should NOT appear
    And the lightbox should open instead


Feature: Text highlighting
  As a user reviewing agent responses
  I want to highlight text in posts with colored markers
  So that I can mark important passages for later reference

  Scenario: Selecting text shows highlight color picker
    Given a post with text content is visible
    When I select text in a post
    Then a highlight color picker should appear
    And it should offer yellow, green, blue, pink, orange options

  Scenario: Tapping a color highlights the selected text
    Given I have selected text and the color picker is visible
    When I tap the yellow color
    Then the selected text should have a yellow background highlight
    And the highlight should persist after deselection

  Scenario: Highlights persist across page refresh
    Given I have highlighted text in a post
    When I refresh the page
    Then the highlighted text should still have its color applied

  Scenario: Highlights are stored in message annotations
    Given I have highlighted text in a post
    Then the annotation should be saved via PATCH /post/:id/annotations
    And the annotation should include text, textOffset, and color

  Scenario: Color picker works with Apple Pencil
    Given I am on an iPad with Apple Pencil
    When I select text and tap a highlight color with the Pencil
    Then the highlight should apply correctly
    And disabled menu items should show at 50% opacity
