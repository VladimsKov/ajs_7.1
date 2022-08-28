import Validator from '../basic';

test.each([
  ['f', true],
  ['Flk-j_l', true],
  ['Fgh123-67gh', true],
  ['fgh123-67h', true],
  ['f123g', true],
  ['123', false],
  ['f123', false],
  ['123f', false],
  ['Fgh1234-674gh', false],
  ['Fgh123%-67gh', false],
])('validate %s to be %s ', (value, expected) => {
  expect(Validator.validateUsername(value)).toBe(expected);
});
