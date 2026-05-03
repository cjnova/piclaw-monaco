Feature: PWA manifest and home screen icons
  As a user adding PiClaw to my home screen
  I want the manifest to supply correct high-resolution avatar icons
  So that iOS builds a sharp, branded desktop icon

  Background:
    Given I am authenticated and on the main chat

  # Core: manifest serves valid JSON with icon entries
  Scenario: Manifest returns valid JSON with required fields
    When I fetch /manifest.json
    Then the response should be valid JSON
    And the response Content-Type should be "application/manifest+json"
    And the manifest should contain "name"
    And the manifest should contain "icons" with at least 2 entries
    And each icon entry should have "src", "sizes", and "type" fields

  # Icons resolve at declared sizes
  Scenario: Manifest icon URLs resolve to actual images
    When I fetch /manifest.json
    Then each icon "src" URL should return HTTP 200
    And each icon response Content-Type should be "image/png"

  # Avatar propagation: custom avatar appears in manifest
  Scenario: Custom agent avatar appears in manifest icons
    Given the agent has a custom avatar configured
    When I fetch /manifest.json
    Then the icon URLs should reference the avatar endpoint
    And the 512x512 icon should be at least 400px wide when decoded

  # Apple touch icons at required sizes
  Scenario: Apple touch icon at 180x180 resolves
    When I fetch /apple-touch-icon-180x180.png
    Then the response should be HTTP 200
    And the Content-Type should be "image/png"
    And the image should be 180x180 pixels

  Scenario: Apple touch icon at 167x167 resolves
    When I fetch /apple-touch-icon-167x167.png
    Then the response should be HTTP 200
    And the image should be 167x167 pixels

  Scenario: Apple touch icon at 152x152 resolves
    When I fetch /apple-touch-icon-152x152.png
    Then the response should be HTTP 200
    And the image should be 152x152 pixels

  Scenario: Generic apple-touch-icon resolves
    When I fetch /apple-touch-icon.png
    Then the response should be HTTP 200
    And the Content-Type should be "image/png"

  # Favicon consistency
  Scenario: Favicon serves PNG (Safari compatibility)
    When I fetch /favicon.ico
    Then the response should be HTTP 200
    And the response should be a valid PNG image

  # Manifest updates when avatar changes
  Scenario: Manifest icon version changes after avatar update
    Given I note the current manifest icon version
    When the agent avatar is updated
    And I fetch /manifest.json again
    Then the icon URLs should contain a different version parameter
