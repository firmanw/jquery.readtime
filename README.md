# jQuery.ReadTime

A jQuery plugin to estimated the reading time.

## Installation

As usual, just include the script right after jQuery.

	<script src="jquery.readtime.js"></script>

## Usage

Use a jQuery selector as the subject.

	$(selector).readtime(options)
	
Examples:

	$('#article').readtime({
		placeholder: '#readtime'
	});

You can also passing a plain string.

	$.readtime(string, options)

Examples:

	$.readtime('Hello World', {
		placeholder: '#readtime'
	});

## Options

+ **wpm**: _number_ - Words per Minute (default: 180)
+ **output**: _string_ or _function_ - Output format (default: "%0rth:%0rtm:%0rts (%rtw)"). See **Type Specifier** and **Custom Output** section.
+ **placeholder**: _string_ or _jQuery object_ - A selector of placeholder for output

## Type Specifier

The output can be formatted using type specifier.

+ %rth - Hour
+ %rtm - Minutes
+ %rts - Seconds
+ %0rth - Hour, with leading zeros
+ %0rtm - Minutes, with leading zeros
+ %0rts - Seconds, with leading zeros
+ %rtw - Words count

Example:

	$('#article').readtime({
		placeholder: '#readtime',
		output: '%rth hr %rtm min %rts sec (%rtw)'
	});

Result:

	1 hr 5 min 10 sec
	
## Custom Output

You can freely customise the output by passing a function to `output` option.

	$('#article').readtime({
		placeholder: '#readtime',
		output: function(hour, minute, second, words) {
			...
		}
	})

## License

Licensed under the [MIT License](http://www.opensource.org/licenses/MIT)

Copyright © 2014, Firman Wandayandi
