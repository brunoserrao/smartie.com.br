jQuery(function(){
	jQuery( document.body ).on( 'click', '.woocommerce_attach_upload_file_button', function( event ) {
		var $el = jQuery( this );

		event.preventDefault();

		// Create the media frame.
		var downloadable_file_frame = wp.media.frames.downloadable_file = wp.media({
			// Set the title of the modal.
			title: $el.data('choose'),
			library: {
				type: ''
			},
			button: {
				text: $el.data('update')
			},
			multiple: false,
			// states: downloadable_file_states
		});

		downloadable_file_frame.open();

		// When an image is selected, run a callback.
		downloadable_file_frame.on( 'select', function() {
			var file_path = '';
			var selection = downloadable_file_frame.state().get( 'selection' ).first().toJSON();
			jQuery('#woocommerce_attach_upload_file').val(selection.url);
		});
	});
})