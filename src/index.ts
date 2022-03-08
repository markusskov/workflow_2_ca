import { createProduct } from './scripts/objectHelpers';
import { getCharacters } from './scripts/query';

const newProduct = createProduct(
  12,
  'd f g',
  'This is the title of the product, it will be truncated'
);

console.log(newProduct);

// Api Call
getCharacters();
