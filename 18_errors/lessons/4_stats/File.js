import Node from './Node';

export default class File extends Node {
  constructor(name) {
    super(name);
    this.file = true;
    this.directory = false;
  }

  isDirectory() {
    return this.directory;
  }

  isFile() {
    return this.file;
  }
}
