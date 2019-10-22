/* eslint-disable */

export default class {
  checks = [];

  addCheck() {}

  isValid(data) {
    return this.checks.every((fn) => fn(data));
  }
}
