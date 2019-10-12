class Enumerable {
  constructor(collection, operations) {
    this.collection = collection;
    this.operations = operations || [];
  }

  select(fn) {
    const newOps = this.operations.slice();
    newOps.push((coll) => coll.map(fn));
    return new Enumerable(this.collection.slice(), newOps);
  }

  where(fn) {
    const newOps = this.operations.slice();
    newOps.push((coll) => coll.filter(fn));
    return new Enumerable(this.collection.slice(), newOps);
  }

  orderBy(fn, direction = 'asc') {
    const compareResult = direction !== 'desc' ? 1 : -1;
    const comparator = (a, b) => {
      const a1 = fn(a);
      const b1 = fn(b);

      if (a1 > b1) {
        return compareResult;
      }
      if (a1 < b1) {
        return -compareResult;
      }
      return 0;
    };
    const newOps = this.operations.slice();
    newOps.push((coll) => coll.sort(comparator));
    return new Enumerable(this.collection.slice(), newOps);
  }

  toArray() {
    return this.operations.reduce((acc, func) => func(acc), this.collection);
  }
}

export default Enumerable;
