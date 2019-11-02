export default (asyncFn) => (...args) => new Promise((resolve, reject) => {
  asyncFn(...args, (err, data) => (err ? reject(err) : resolve(data)));
});
