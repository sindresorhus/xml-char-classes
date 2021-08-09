import test from 'ava';
import xmlCharacterClasses from './index.js';

test('matches valid XML Character Classes characters', t => {
	t.regex('unicorn', xmlCharacterClasses.letter);
	t.regex('0', xmlCharacterClasses.digit);
	t.notRegex('#', xmlCharacterClasses.letter);
});
