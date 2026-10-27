# Changelog

All notable changes to this project will be documented in this file. The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Add items to Unreleased as they are developed, then introduce new headings whenever you [tag a new release](https://github.com/humanmade/modal-block?tab=readme-ov-file#release-process)

## Unreleased

### Fixed
- Fix modals not opening on slow connections (e.g. on mobile) when the view script runs after `DOMContentLoaded`

## [1.0.2](https://github.com/humanmade/modal-block/releases/tag/v1.0.2)

Add `Update URI` header so WordPress no longer offers the unrelated `modal-block` plugin from WordPress.org as an update candidate

## [1.0.1](https://github.com/humanmade/modal-block/releases/tag/v1.0.1)

Fix path hierarchy error causing blocks not to load in editor

## [1.0.0](https://github.com/humanmade/modal-block/releases/tag/v1.0.0)

Initial release of HM Modal Block plugin

### Added
- Modal Trigger block for creating accessible modal popups
- Modal Content block with overlay and close button
- Keyboard accessibility with focus trapping
- Auto-pause videos/iframes when modal closes
