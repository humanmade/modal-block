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
1. Clone or download to `/wp-content/plugins/hm-modal-block/`
2. Run `npm install && npm run build`
3. Activate the plugin in WordPress

### For Production
1. Download a [release bundle](https://github.com/humanmade/hm-modal-block/releases) or clone the `release` branch
2. Upload to `/wp-content/plugins/hm-modal-block/`
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

## License

GPL-2.0-or-later

## Author

Human Made Limited - https://humanmade.com
