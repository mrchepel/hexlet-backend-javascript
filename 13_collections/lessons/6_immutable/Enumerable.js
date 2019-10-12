class Enumerable {
  constructor(collection) {
    this.collection = collection;
  }

  select(fn) {
    return new Enumerable(this.collection.map(fn));
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

    return new Enumerable(this.collection.slice().sort(comparator));
  }

  where(fn) {
    const filtered = this.collection.filter(fn);
    return new Enumerable(filtered);
  }

  toArray() {
    return this.collection;
  }
}

export default Enumerable;
