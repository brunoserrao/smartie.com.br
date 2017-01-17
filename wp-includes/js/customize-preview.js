/*
 * Script run inside a Customizer preview frame.
 */
(function( exports, $ ){
	var api = wp.customize,
<<<<<<< HEAD
		debounce,
		currentHistoryState = {};

	/*
	 * Capture the state that is passed into history.replaceState() and history.pushState()
	 * and also which is returned in the popstate event so that when the changeset_uuid
	 * gets updated when transitioning to a new changeset there the current state will
	 * be supplied in the call to history.replaceState().
	 */
	( function( history ) {
		var injectUrlWithState;

		if ( ! history.replaceState ) {
			return;
		}

		/**
		 * Amend the supplied URL with the customized state.
		 *
		 * @since 4.7.0
		 * @access private
		 *
		 * @param {string} url URL.
		 * @returns {string} URL with customized state.
		 */
		injectUrlWithState = function( url ) {
			var urlParser, oldQueryParams, newQueryParams;
			urlParser = document.createElement( 'a' );
			urlParser.href = url;
			oldQueryParams = api.utils.parseQueryString( location.search.substr( 1 ) );
			newQueryParams = api.utils.parseQueryString( urlParser.search.substr( 1 ) );

			newQueryParams.customize_changeset_uuid = oldQueryParams.customize_changeset_uuid;
			if ( oldQueryParams.customize_theme ) {
				newQueryParams.customize_theme = oldQueryParams.customize_theme;
			}
			if ( oldQueryParams.customize_messenger_channel ) {
				newQueryParams.customize_messenger_channel = oldQueryParams.customize_messenger_channel;
			}
			urlParser.search = $.param( newQueryParams );
			return urlParser.href;
		};

		history.replaceState = ( function( nativeReplaceState ) {
			return function historyReplaceState( data, title, url ) {
				currentHistoryState = data;
<<<<<<< HEAD
				return nativeReplaceState.call( history, data, title, 'string' === typeof url && url.length > 0 ? injectUrlWithState( url ) : url );
=======
				return nativeReplaceState.call( history, data, title, injectUrlWithState( url ) );
>>>>>>> origin/master
			};
		} )( history.replaceState );

		history.pushState = ( function( nativePushState ) {
			return function historyPushState( data, title, url ) {
				currentHistoryState = data;
<<<<<<< HEAD
				return nativePushState.call( history, data, title, 'string' === typeof url && url.length > 0 ? injectUrlWithState( url ) : url );
=======
				return nativePushState.call( history, data, title, injectUrlWithState( url ) );
>>>>>>> origin/master
			};
		} )( history.pushState );

		window.addEventListener( 'popstate', function( event ) {
			currentHistoryState = event.state;
		} );

	}( history ) );
=======
		debounce;
>>>>>>> parent of 7ae5549... Worpress updates

	/**
	 * Returns a debounced version of the function.
	 *
	 * @todo Require Underscore.js for this file and retire this.
	 */
	debounce = function( fn, delay, context ) {
		var timeout;
		return function() {
			var args = arguments;

			context = context || this;

			clearTimeout( timeout );
			timeout = setTimeout( function() {
				timeout = null;
				fn.apply( context, args );
			}, delay );
		};
	};

	/**
	 * @constructor
	 * @augments wp.customize.Messenger
	 * @augments wp.customize.Class
	 * @mixes wp.customize.Events
	 */
	api.Preview = api.Messenger.extend({
		/**
		 * @param {object} params  - Parameters to configure the messenger.
		 * @param {object} options - Extend any instance parameter or method with this object.
		 */
		initialize: function( params, options ) {
<<<<<<< HEAD
			var preview = this, urlParser = document.createElement( 'a' );

			api.Messenger.prototype.initialize.call( preview, params, options );

			urlParser.href = preview.origin();
			preview.add( 'scheme', urlParser.protocol.replace( /:$/, '' ) );

			preview.body = $( document.body );
			preview.window = $( window );

			if ( api.settings.channel ) {

				// If in an iframe, then intercept the link clicks and form submissions.
				preview.body.on( 'click.preview', 'a', function( event ) {
					preview.handleLinkClick( event );
				} );
				preview.body.on( 'submit.preview', 'form', function( event ) {
					preview.handleFormSubmit( event );
				} );

				preview.window.on( 'scroll.preview', debounce( function() {
					preview.send( 'scroll', preview.window.scrollTop() );
				}, 200 ) );

				preview.bind( 'scroll', function( distance ) {
					preview.window.scrollTop( distance );
				});
			}
		},

		/**
		 * Handle link clicks in preview.
		 *
		 * @since 4.7.0
		 * @access public
		 *
		 * @param {jQuery.Event} event Event.
		 */
		handleLinkClick: function( event ) {
			var preview = this, link, isInternalJumpLink;
<<<<<<< HEAD
			link = $( event.target ).closest( 'a' );
=======
			link = $( event.target );
>>>>>>> origin/master

			// No-op if the anchor is not a link.
			if ( _.isUndefined( link.attr( 'href' ) ) ) {
				return;
			}

			isInternalJumpLink = ( '#' === link.attr( 'href' ).substr( 0, 1 ) );
=======
			var self = this;
>>>>>>> parent of 7ae5549... Worpress updates

			api.Messenger.prototype.initialize.call( this, params, options );

			this.body = $( document.body );
			this.body.on( 'click.preview', 'a', function( event ) {
				var link, isInternalJumpLink;
				link = $( this );
				isInternalJumpLink = ( '#' === link.attr( 'href' ).substr( 0, 1 ) );
				event.preventDefault();

				if ( isInternalJumpLink && '#' !== link.attr( 'href' ) ) {
					$( link.attr( 'href' ) ).each( function() {
						this.scrollIntoView();
					} );
				}

				/*
				 * Note the shift key is checked so shift+click on widgets or
				 * nav menu items can just result on focusing on the corresponding
				 * control instead of also navigating to the URL linked to.
				 */
				if ( event.shiftKey || isInternalJumpLink ) {
					return;
				}
				self.send( 'scroll', 0 );
				self.send( 'url', link.prop( 'href' ) );
			});

			// You cannot submit forms.
			// @todo: Allow form submissions by mixing $_POST data with the customize setting $_POST data.
			this.body.on( 'submit.preview', 'form', function( event ) {
				event.preventDefault();
			});

			this.window = $( window );
			this.window.on( 'scroll.preview', debounce( function() {
				self.send( 'scroll', self.window.scrollTop() );
			}, 200 ));

			this.bind( 'scroll', function( distance ) {
				self.window.scrollTop( distance );
			});
		}
	});

	$( function() {
		var bg, setValue;

		api.settings = window._wpCustomizeSettings;
		if ( ! api.settings ) {
			return;
		}

		api.preview = new api.Preview({
			url: window.location.href,
			channel: api.settings.channel
		});

		/**
		 * Create/update a setting value.
		 *
		 * @param {string}  id            - Setting ID.
		 * @param {*}       value         - Setting value.
		 * @param {boolean} [createDirty] - Whether to create a setting as dirty. Defaults to false.
		 */
		setValue = function( id, value, createDirty ) {
			var setting = api( id );
			if ( setting ) {
				setting.set( value );
			} else {
				createDirty = createDirty || false;
				setting = api.create( id, value, {
					id: id
				} );

				// Mark dynamically-created settings as dirty so they will get posted.
				if ( createDirty ) {
					setting._dirty = true;
				}
			}
		};

		api.preview.bind( 'settings', function( values ) {
			$.each( values, setValue );
		});

		api.preview.trigger( 'settings', api.settings.values );

		$.each( api.settings._dirty, function( i, id ) {
			var setting = api( id );
			if ( setting ) {
				setting._dirty = true;
			}
		} );

		api.preview.bind( 'setting', function( args ) {
			var createDirty = true;
			setValue.apply( null, args.concat( createDirty ) );
		});

		api.preview.bind( 'sync', function( events ) {
			$.each( events, function( event, args ) {
				api.preview.trigger( event, args );
			});
			api.preview.send( 'synced' );
		});

		api.preview.bind( 'active', function() {
			api.preview.send( 'nonce', api.settings.nonce );

			api.preview.send( 'documentTitle', document.title );
		});

		api.preview.bind( 'saved', function( response ) {
			api.trigger( 'saved', response );
		} );

		api.bind( 'saved', function() {
			api.each( function( setting ) {
				setting._dirty = false;
			} );
		} );

		api.preview.bind( 'nonce-refresh', function( nonce ) {
			$.extend( api.settings.nonce, nonce );
		} );

		/*
		 * Send a message to the parent customize frame with a list of which
		 * containers and controls are active.
		 */
		api.preview.send( 'ready', {
			activePanels: api.settings.activePanels,
			activeSections: api.settings.activeSections,
			activeControls: api.settings.activeControls,
			settingValidities: api.settings.settingValidities
		} );

		// Display a loading indicator when preview is reloading, and remove on failure.
		api.preview.bind( 'loading-initiated', function () {
			$( 'body' ).addClass( 'wp-customizer-unloading' );
		});
		api.preview.bind( 'loading-failed', function () {
			$( 'body' ).removeClass( 'wp-customizer-unloading' );
		});

		/* Custom Backgrounds */
		bg = $.map(['color', 'image', 'position_x', 'repeat', 'attachment'], function( prop ) {
			return 'background_' + prop;
		});

		api.when.apply( api, bg ).done( function( color, image, position_x, repeat, attachment ) {
			var body = $(document.body),
				head = $('head'),
				style = $('#custom-background-css'),
				update;

			update = function() {
				var css = '';

				// The body will support custom backgrounds if either
				// the color or image are set.
				//
				// See get_body_class() in /wp-includes/post-template.php
				body.toggleClass( 'custom-background', !! ( color() || image() ) );

				if ( color() )
					css += 'background-color: ' + color() + ';';

				if ( image() ) {
					css += 'background-image: url("' + image() + '");';
					css += 'background-position: top ' + position_x() + ';';
					css += 'background-repeat: ' + repeat() + ';';
					css += 'background-attachment: ' + attachment() + ';';
				}

				// Refresh the stylesheet by removing and recreating it.
				style.remove();
				style = $('<style type="text/css" id="custom-background-css">body.custom-background { ' + css + ' }</style>').appendTo( head );
			};

			$.each( arguments, function() {
				this.bind( update );
			});
		});

		/**
		 * Custom Logo
		 *
		 * Toggle the wp-custom-logo body class when a logo is added or removed.
		 *
		 * @since 4.5.0
		 */
		api( 'custom_logo', function( setting ) {
			$( 'body' ).toggleClass( 'wp-custom-logo', !! setting.get() );
			setting.bind( function( attachmentId ) {
				$( 'body' ).toggleClass( 'wp-custom-logo', !! attachmentId );
			} );
		} );

		api.trigger( 'preview-ready' );
	});

})( wp, jQuery );
