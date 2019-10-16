export default class Node {
  constructor(name, attributes = {}) {
    this.name = name;
    this.attributes = attributes;
  }

  getAttributesAsLine() {
    return Object.entries(this.attributes).map(([key, value]) => ` ${key}="${value}"`).join('');
  }
}
