QUnit.test( 'One word count', function( assert ) {
	$.readtime('hello', {
		output: function( hour, minute, second, words ) {
			assert.strictEqual( words, 1, 'A word "hello" has given which should be count as 1 word.' );
		}
	} );
});

QUnit.test( 'One word estimated time', function( assert ) {
	$.readtime('hello', {
		output: function( hour, minute, second, words ) {
			assert.strictEqual( second, 1, 'A word "hello" has given which should be took 1 sec to read.' );
		}
	} );
});

QUnit.test( 'Words count', function( assert ) {
	$.readtime('Lorem ipsum dolor sit amet, consectetur adipiscing elit.', {
		output: function( hour, minute, second, words ) {
			console.log( hour + ' ' + minute + ' ' + second);
			assert.strictEqual( words, 12, '"Lorem| ipsu|m dol|or si|t ame|t, co|nsect|etur |adipi|scing| elit|." should be count as 12 words.' );
		}
	} );
});

QUnit.test( 'Estimated time', function( assert ) {
	$.readtime('Lorem ipsum dolor sit amet, consectetur adipiscing elit.', {
		output: function( hour, minute, second, words ) {
			assert.strictEqual( second, Math.ceil(  ( 12 / 200 ) * 60 ), '"Lorem ipsum dolor sit amet, consectetur adipiscing elit." should be took 4 sec to read.' );
		}
	} );
});

QUnit.test( 'Default output', function( assert ) {
	$.readtime('Lorem ipsum dolor sit amet, consectetur adipiscing elit.', {
		placeholder: '#readtime'
	} );

	assert.strictEqual( $('#readtime').text(), '00:00:04 (12)', 'Default output format "%0rth:%0rtm:%0rts (%rtw)" should be 00:00:04 (12).');
});

QUnit.test( 'Custom output', function( assert ) {
	$.readtime('Lorem ipsum dolor sit amet, consectetur adipiscing elit.', {
		output: '%rth hr %rtm min %rts sec (%rtw words)',
		placeholder: '#readtime'
	} );

	assert.strictEqual( $('#readtime').text(), '0 hr 0 min 4 sec (12 words)', 'Custom output "%rth hr %rtm min %rts sec (%rtw words)" should be 0 hr 0 min 4 sec (12 words).');
});
