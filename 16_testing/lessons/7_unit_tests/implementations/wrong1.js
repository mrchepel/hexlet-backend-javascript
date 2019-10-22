/* eslint-disable */

export default class {
  checks = [];

  addCheck(fn) {
    this.checks.push(fn);
  }

  isValid() {
    return false;
  }
}
