import { makeUppercase, replaceSpaces, limitLength } from './stringHelpers';

test('Check if letters are uppercase', () => {
  expect(makeUppercase('are all letters uppercase')).toBe(
    'ARE ALL LETTERS UPPERCASE'
  );
});

test('Replace spaces with underscore', () => {
  expect(replaceSpaces(' ')).toBe('_');
});

test('Return a given portion of a string', () => {
  expect(limitLength(2, '12345')).toBe('12');
});
