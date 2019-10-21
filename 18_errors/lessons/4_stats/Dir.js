import Node from './Node';

export default class Dir extends Node {
  constructor(name) {
    super(name);
    this.file = false;
    this.directory = true;
  }

  isDirectory() {
    return this.directory;
  }

  isFile() {
    return this.file;
  }
}
