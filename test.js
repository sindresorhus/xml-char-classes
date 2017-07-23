import test from 'ava';
import m from '.';

test('matches valid XML Character Classes characters', t => {
	t.regex('unicorn', m.letter);
	t.regex('0', m.digit);
	t.notRegex('#', m.letter);
});
