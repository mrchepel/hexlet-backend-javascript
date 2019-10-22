import path from 'path';
import Tree from '@hexlet/trees';
import { Dir, File } from '@hexlet/fs';


const getPathParts = (filepath) => filepath.split(path.sep).filter((part) => part !== '');

export default class {
  constructor() {
    this.tree = new Tree('/', new Dir('/'));
  }

  statSync(filepath) {
    const current = this.findNode(filepath);
    if (!current) {
      return null;
    }
    return current.getMeta().getStats();
  }

  mkdirSync(filepath) {
    const current = this.findNode(filepath);
    if (current) {
      return false;
    }
    const { base, dir } = path.parse(filepath);
    const parent = this.findNode(dir);
    if (!parent || parent.getMeta().isFile()) {
      return false;
    }
    parent.addChild(base, new Dir(base));
    return true;
  }

  mkdirpSync(filepath) {
    return getPathParts(filepath).reduce((subtree, node) => {
      if (!subtree) {
        return false;
      }
      const current = subtree.getChild(node);
      if (!current) {
        return subtree.addChild(node, new Dir(node));
      }
      if (current.getMeta().getStats().isFile()) {
        return false;
      }
      return current;
    }, this.tree);
  }

  readdirSync(filepath) {
    const node = this.findNode(filepath);
    if (!node || node.getMeta().getStats().isFile()) {
      return false;
    }
    return node.getChildren().map((child) => child.getMeta().getName());
  }

  touchSync(filepath) {
    const { base, dir } = path.parse(filepath);
    const parent = this.findNode(dir);
    if (!parent) {
      return false;
    }
    if (parent.getMeta().isFile()) {
      return false;
    }
    parent.addChild(base, new File(base, ''));
    return true;
  }

  rmdirSync(filepath) {
    const { base } = path.parse(filepath);
    const current = this.findNode(filepath);
    if (!current) {
      return false;
    }
    if (current.getMeta().isFile() || current.hasChildren()) {
      return false;
    }
    current.getParent().removeChild(base);
    return true;
  }

  findNode(filepath) {
    const parts = getPathParts(filepath);
    return parts.length === 0 ? this.tree : this.tree.getDeepChild(parts);
  }
}
