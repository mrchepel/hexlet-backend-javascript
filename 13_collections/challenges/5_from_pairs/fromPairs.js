export default (arr) => arr.reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
