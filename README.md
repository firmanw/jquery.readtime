# jQuery.ReadTime

A jQuery plugin to estimated the reading time.

## Installation

As usual, just include the script right after jQuery.

	<script src="jquery.readtime.js"></script>

## Usage

Use it on jQuery selector.

	$(selector).readtime(options)

You can also use it on plain string.

	$.readtime(string, options)

Examples:

	$('#article').readtime({
		placeholder: '#readtime'
	});

As for a plain string.

	$.readtime('Hello World', {
		placeholder: '#readtime'
	});

## Options

+ **wpm**: _number_ - Words per Minute (default: 200)
+ **output**: _string_ - Output format (default: "%0rth:%0rtm:%0rts (%rtw)"). See **Type Specifier** section.
+ **placeholder**: _string_ or _jQuery object_ - A placeholder for output

## Type Specifier

You can customise the output format using type specifier.

+ %rth - Hour
+ %rtm - Minutes
+ %rts - Seconds
+ %0rth - Hour, with leading zeros
+ %0rtm - Minutes, with leading zeros
+ %0rts - Seconds, with leading zeros
+ %rtw - Words count

Example:

	$('#article').readtime({
		output: '%rth hr %rtm min %rts sec (%rtw)'
		placeholder: '#readtime'
	});

Result:

	1 hr 5 min 10 sec

## License

Licensed under the [MIT License](http://www.opensource.org/licenses/MIT)

Copyright © 2014, Firman Wandayandi
