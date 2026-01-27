/**
 * Modal Block Frontend JavaScript
 *
 * Handles opening/closing modals with keyboard accessibility
 */

document.addEventListener( 'DOMContentLoaded', function () {
	// Find all modal blocks
	const modals = document.querySelectorAll( '.hm-modal-trigger' );

	modals.forEach( ( modalBlock ) => {
		const trigger = modalBlock.querySelector( '.modal-trigger' );

		// Skip if this is a placeholder
		if ( trigger?.closest( '.is-placeholder' ) ) {
			return;
		}

		const content = modalBlock.querySelector( '.modal-content' );

		if ( ! trigger || ! content ) {
			return;
		}

		const closeButton = content.querySelector( '.modal-close' );
		let previousFocus = null;
		let lastFocusedElement = null;
		const iframeSources = new Map(); // Store original iframe sources
		let isFirstOpen = true;

		// Get all focusable elements
		function getFocusableElements() {
			return Array.from(
				content.querySelectorAll(
					'a[href], button:not([disabled]), textarea, input, select, iframe, [tabindex]:not([tabindex="-1"])'
				)
			);
		}

		// Open modal
		function openModal() {
			previousFocus = document.activeElement;
			content.classList.add( 'is-open' );
			content.style.display = 'flex';
			document.body.style.overflow = 'hidden';

			const iframes = content.querySelectorAll( 'iframe' );

			if ( isFirstOpen ) {
				// Store original iframe sources on first open
				iframes.forEach( ( iframe ) => {
					if ( iframe.src ) {
						iframeSources.set( iframe, iframe.src );
					}
				} );
				isFirstOpen = false;
			} else {
				// Restore iframe sources on subsequent opens
				iframes.forEach( ( iframe ) => {
					if ( iframeSources.has( iframe ) ) {
						iframe.src = iframeSources.get( iframe );
					}
				} );
			}

			// Focus close button for accessibility
			if ( closeButton ) {
				closeButton.focus();
			}

			// Trap focus within modal
			content.addEventListener( 'keydown', trapFocusKeyboard );
			document.addEventListener( 'focusin', trapFocusEvent );
		}

		// Close modal
		function closeModal() {
			content.classList.remove( 'is-open' );
			document.body.style.overflow = '';

			// Stop all videos/audio in iframes by clearing src
			const iframes = content.querySelectorAll( 'iframe' );
			iframes.forEach( ( iframe ) => {
				iframe.src = '';
			} );

			// Pause HTML5 video/audio elements
			const mediaElements = content.querySelectorAll( 'video, audio' );
			mediaElements.forEach( ( media ) => {
				media.pause();
			} );

			// Restore focus
			if ( previousFocus ) {
				previousFocus.focus();
			}

			// Remove focus trap
			content.removeEventListener( 'keydown', trapFocusKeyboard );
			document.removeEventListener( 'focusin', trapFocusEvent );

			// Hide after transition
			setTimeout( () => {
				if ( ! content.classList.contains( 'is-open' ) ) {
					content.style.display = 'none';
				}
			}, 300 );
		}

		// Trap focus with keyboard (handles tab key)
		function trapFocusKeyboard( e ) {
			if ( e.key !== 'Tab' ) {
				return;
			}

			const focusableElements = getFocusableElements();
			const firstFocusable = focusableElements[ 0 ];
			const lastFocusable =
				focusableElements[ focusableElements.length - 1 ];

			// Track which element has focus before tab
			lastFocusedElement = document.activeElement;

			if ( e.shiftKey && document.activeElement === firstFocusable ) {
				e.preventDefault();
				lastFocusable.focus();
			} else if (
				! e.shiftKey &&
				document.activeElement === lastFocusable
			) {
				e.preventDefault();
				firstFocusable.focus();
			}
		}

		// Trap focus events (catches focus leaving modal, including from iframes)
		function trapFocusEvent( e ) {
			if ( ! content.classList.contains( 'is-open' ) ) {
				return;
			}

			// If focus moved outside the modal
			if ( ! content.contains( e.target ) ) {
				e.preventDefault();
				e.stopPropagation();

				// Return focus to the last focused element or close button
				if (
					lastFocusedElement &&
					content.contains( lastFocusedElement )
				) {
					lastFocusedElement.focus();
				} else if ( closeButton ) {
					closeButton.focus();
				}
			} else {
				// Track focus within modal
				lastFocusedElement = e.target;
			}
		}

		// Trigger click opens modal
		trigger.addEventListener( 'click', ( e ) => {
			e.preventDefault();
			openModal();
		} );

		// Close button
		if ( closeButton ) {
			closeButton.addEventListener( 'click', closeModal );
		}

		// Close on overlay click
		content.addEventListener( 'click', ( e ) => {
			if ( e.target === content ) {
				closeModal();
			}
		} );

		// Close on Escape key
		document.addEventListener( 'keydown', ( e ) => {
			if (
				e.key === 'Escape' &&
				content.classList.contains( 'is-open' )
			) {
				closeModal();
			}
		} );
	} );
} );
