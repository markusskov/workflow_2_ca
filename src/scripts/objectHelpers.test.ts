import { createProduct } from './objectHelpers';

test('Is a product created correct', () => {
  expect(createProduct(2, 'dfa', 'parcel is very awesome')).toStrictEqual({
    code: 'DFA',
    id: 2,
    title: 'parcel_is_ve',
  });
});
