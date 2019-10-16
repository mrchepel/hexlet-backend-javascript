export default function Node(name, attributes = {}) {
  this.name = name;
  this.attributes = attributes;
}

Node.prototype.getAttributesAsLine = function getAttributesAsLine() {
  return Object.entries(this.attributes)
    .map(([key, value]) => ` ${key}="${value}"`).join('');
};
