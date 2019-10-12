class Enumerable {
  constructor(collection, operations) {
    this.collection = collection;
    this.operations = operations || [];
  }

  build(fn) {
    return new Enumerable(this.collection.slice(), this.operations.concat(fn));
  }

  where(...predicates) {
    const fn = predicates.map((predicate) => {
      if (typeof predicate === 'function') {
        return (coll) => coll.filter(predicate);
      }

      const keys = Object.keys(predicate);
      return (coll) => coll.filter(
        (element) => (keys.every((key) => predicate[key] === element[key])),
      );
    });
    return this.build(fn);
  }

  getProcessedCollection() {
    if (!this.memo) {
      this.memo = this.operations.reduce((acc, func) => func(acc), this.collection);
    }

    return this.memo;
  }

  get length() {
    return this.getProcessedCollection().length;
  }

  toArray() {
    return this.getProcessedCollection().slice();
  }
}

export default Enumerable;
