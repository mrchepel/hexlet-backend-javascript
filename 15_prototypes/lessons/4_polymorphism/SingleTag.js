export default class SingleTag {
  constructor(name, attributes = {}) {
    this.name = name;
    this.attributes = attributes;
  }

  toString() {
    const buildAttrString = (attributes) => Object.keys(attributes).map((key) => ` ${key}="${attributes[key]}"`).join('');
    return `<${this.name}${buildAttrString(this.attributes)}>`;
  }
}
