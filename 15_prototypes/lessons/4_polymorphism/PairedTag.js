export default class PairedTag {
  constructor(name, attributes = {}, body = '', children = []) {
    this.name = name;
    this.attributes = attributes;
    this.body = body;
    this.children = children;
  }

  toString() {
    const buildAttrString = (attributes) => Object.keys(attributes).map((key) => ` ${key}="${attributes[key]}"`).join('');
    return `<${this.name}${buildAttrString(this.attributes)}>${this.body}${this.children.join('')}</${this.name}>`;
  }
}
