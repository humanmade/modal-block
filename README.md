# HM Modal Block

Simple modal block for the WordPress block editor.

## Description

This plugin provides a modal component with two blocks:
- **Modal Trigger**: Container block that wraps the trigger element and modal content
- **Modal Content**: The content displayed in the modal overlay

## Features

- Accessible keyboard navigation
- Focus trapping within modal
- Auto-pause videos/iframes when closed
- Customizable trigger and content
- Works with any inner blocks

## Installation

1. Upload the plugin files to `/wp-content/plugins/hm-modal-block/`
2. Run `npm install && npm run build` to compile the blocks
3. Activate the plugin through the 'Plugins' screen in WordPress

## Usage

1. Add the "Modal Trigger" block to your content
2. Add your trigger element (button, image, text, etc.) inside the trigger area
3. Add your modal content inside the "Modal Content" block (automatically added below the trigger)
4. When clicked, the trigger opens the modal overlay with your content

## Development

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
- Node.js 20.10+

## License

GPL-2.0-or-later

## Author

Human Made Limited - https://humanmade.com
