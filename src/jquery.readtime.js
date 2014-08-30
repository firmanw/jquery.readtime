/*!
 * jQuery ReadTime v1.0.0
 * http://firmanw.com/jquery.readtime
 * Copyright (c) 2014 Firman Wandayandi; Licensed MIT
 */

;( function( $ ) {

	var ReadTime = this.ReadTime = function( subject, options ) {

		this.subject 	= subject;
		this.options 	= jQuery.extend( {}, this.defaults, options );

		this.output();

	}; ReadTime.prototype = {

		defaults: {
			wpm: 			180, 							// Words per minute
			output: 		'%0rth:%0rtm:%0rts (%rtw)', 	// %(0)rt(h|m|s) or function
			placeholder: 	''								// jQuery selector for output
		},

		count: function( text ) {

			var pattern = /.{5}/gmi, // "each word is standardized to be five characters or keystrokes long, including spaces and punctuation." ( http://en.wikipedia.org/wiki/Words_per_minute )
				words = 0,
				time = 0;

			// Normalize the spaces
			text = jQuery.trim( text.replace(/\s+/gmi, ' ') );

			// Count the words
			words = text.length > 5 ? text.split(pattern).length : 1;

			// Calculate the estimated reading time in seconds
			time = Math.ceil( ( words / this.options.wpm ) * 60 );

			return {
				hour	: Math.floor( time / 3600 ),
				minute  : Math.floor( ( time % 3600 ) / 60 ),
				second	: Math.round( time % 60 ),
				words   : words
			};

		},

		output: function() {

			var text = '',
				result = {},
				output = '';

			if ( typeof this.subject === 'string' ) text = this.subject;
			else if ( this.subject.length > 0 ) text = this.subject.text();
			else return;

			result = this.count( text );

			if ( typeof this.options.output === 'function' )  { // callback
				output = this.options.output.apply( null, [ result.hour, result.minute, result.second, result.words ] );
			} else {
				output = this.options.output.replace(/%(0)*rt(h|m|s|w)/gmi, function( word ) {
					if ( word == '%rth' ) return result.hour;
					if ( word == '%rtm' ) return result.minute;
					if ( word == '%rts' ) return result.second;
					if ( word == '%0rth' ) return result.hour < 9 ? '0' + result.hour : result.hour;
					if ( word == '%0rtm' ) return result.minute < 9 ? '0' + result.minute : result.minute;
					if ( word == '%0rts' ) return result.second < 9 ? '0' + result.second : result.second;
					if ( word == '%rtw' ) return result.words;
				});
			}

			$(this.options.placeholder).html( output );

		}
	};

	jQuery.readtime = function( subject, options ) {
		new ReadTime( subject, options);
	};

	jQuery.fn.readtime = function( options ) {
		new ReadTime( this, options );
		return this;
	};

} ).apply( window, [jQuery] );
