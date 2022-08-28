// Homework ajs_7.1
export default class Validator {
  static validateUsername(name) {
    const regexp = /(^[a-z](\d{0,3}[a-z-_])*([a-z]$|\d{0,3}[a-z]$))|[a-z]/i;
    const res = name.match(regexp);
    if (res && res[0] === name) {
      return true;
    }
    return false;
  }
}
