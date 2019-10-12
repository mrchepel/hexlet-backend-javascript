class Enumerable {
  constructor(collection) {
    this.collection = collection;
  }

  select(fn) {
    this.collection = this.collection.map(fn);
    return this;
  }

  orderBy(fn, direction = 'asc') {
    const compare = (a, b) => {
      if (fn(a) < fn(b)) {
        return -1;
      }
      if (fn(a) > fn(b)) {
        return 1;
      }
      return 0;
    };

    const compareReverse = (a, b) => {
      if (fn(a) > fn(b)) {
        return -1;
      }
      if (fn(a) < fn(b)) {
        return 1;
      }
      return 0;
    };

    this.collection = this.collection.sort(direction === 'desc' ? compareReverse : compare);
    return this;
  }

  where(fn) {
    this.collection = this.collection.filter(fn);
    return this;
  }

  toArray() {
    return this.collection.slice();
  }
}

export default Enumerable;
