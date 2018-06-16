import { triangleType } from './index.js';

it('determines the type of a triangle based on three sides', () => {
  expect(triangleType(['-1', '1', '3'])).toEqual(0); // not a triangle
  expect(triangleType(['---', ',.', ';[]'])).toEqual(0); // not a triangle
  expect(triangleType(['3', '3', '3'])).toEqual(1); // equilateral
  expect(triangleType(['3', '4', '5'])).toEqual(2); // scalene
  expect(triangleType(['4', '5', '5'])).toEqual(3); // isosceles
});