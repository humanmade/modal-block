# HM Modal Block

Simple modal block for the WordPress block editor.

## Description

This plugin provides a modal component with two blocks:
- **Modal Trigger**: Container block where you add your trigger element (button, image, etc.)
- **Modal Content**: Renders the modal overlay with your content

## Features

- Accessible keyboard navigation with focus trapping
- Auto-pause videos/iframes when modal closes
- Overlay click and Escape key to close
- Customizable trigger and content using any WordPress blocks

## Installation

### For Development
1. Clone or download to `/wp-content/plugins/modal-block/`
2. Run `npm install && npm run build`
3. Activate the plugin in WordPress

### For Production
1. Download a [release bundle](https://github.com/humanmade/modal-block/releases) or clone the `release` branch
2. Upload to `/wp-content/plugins/modal-block/`
3. Activate the plugin in WordPress

## Usage

1. Add the **Modal Trigger** block to your page
2. Inside it, you'll see:
   - A placeholder paragraph (replace this with your trigger: button, image, text, etc.)
   - A **Modal Content** block (automatically added)
3. Add your modal content inside the "Modal Content" block
4. On the front-end, clicking the trigger opens the modal overlay

**Tip:** Add the class `modal-trigger` to your trigger element for explicit targeting, or the first block before Modal Content will automatically become the trigger.

## Development

If you have [nvm](https://github.com/nvm-sh/nvm) installed you can run `nvm use` in the repository root to activate the correct version of Node.

### Setup
```bash
npm install
composer install
```

### Build
```bash
npm run build
```

### Development Mode
```bash
npm start
```

## Requirements

- WordPress 5.8+
- PHP 7.4+
- Node.js 24+

## Release Process

Merges to `main` will automatically [build](https://github.com/humanmade/modal-block/actions/workflows/build-release-branch.yml) to the `release` branch. A project may be set up to track the `release` branch using [composer](http://getcomposer.org/) to pull in the latest built beta version.

Commits on the `release` branch may be tagged for installation via [packagist](https://packagist.org/packages/humanmade/modal-block) and marked as releases in GitHub for manual download using a [manually-dispatched "Tag and Release" GH Actions workflow](https://github.com/humanmade/modal-block/actions/workflows/tag-and-release.yml).

To tag a new release,

1. Review the unreleased features in the [Changelog](./CHANGELOG.md) and choose the target version number for the next release using [semantic versioning](https://semver.org/)
2. Checkout a `prepare-v#.#.#` branch. In that branch,
   - Add a new header into [CHANGELOG.md](./CHANGELOG.md) for any unreleased features
   - Bump the version number in the [modal-block.php](./modal-block.php) file's PHPDoc header
3. Open a pull request from your branch titled "Prepare release v#.#.#"
4. Review and merge your "Prepare release" pull request
5. Wait for the `release` branch to [update](https://github.com/humanmade/modal-block/actions/workflows/build-release-branch.yml) with the build that includes the new version number
6. On the ["Tag and Release" GH Action page](https://github.com/humanmade/modal-block/actions/workflows/tag-and-release.yml)],
   - Click the "Run workflow" button in the "workflow_dispatch" notification banner (see screenshot below)
   - Fill out the "Version tag" field with your target version number
      - This version must match the version in `modal-block.php` and your newest Changelog section
      - Use the format `v#.#.#` for your version tag
   - Leave the "Branch to tag" field as `release` (we will add the tag on the release branch containing the latest built code)
   - Click "Run workflow"

![Screenshot of Run workflow dropdown form being filled out](./.github/docs/release-tagging-action.jpg)

Once the workflow completes, your new version should be [tagged](https://github.com/humanmade/modal-block/tags) and available in the list of [releases](https://github.com/humanmade/modal-block/releases)

## License

GPL-2.0-or-later

## Author

Human Made Limited - https://humanmade.com
