/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
export default (data, where) => {
  for (const item of data) {
    let find = true;
    const entries = Object.entries(where);
    for (const [key, value] of entries) {
      if (item[key] !== value) {
        find = false;
      }
    }
    if (find) {
      return item;
    }
  }
  return null;
};

// console.log(findWhere(
//   [
//     { title: 'Book of Fooos', author: 'FooBar', year: 1111 },
//     { title: 'Cymbeline', author: 'Shakespeare', year: 1611 },
//     { title: 'The Tempest', author: 'Shakespeare', year: 1611 },
//     { title: 'Book of Foos Barrrs', author: 'FooBar', year: 2222 },
//     { title: 'Still foooing', author: 'FooBar', year: 3333 },
//     { title: 'Happy Foo', author: 'FooBar', year: 4444 },
//   ],
//   { author: 'Shakespeare', year: 1611 };
// ));
