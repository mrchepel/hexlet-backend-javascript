import right1 from './right1';
import wrong1 from './wrong1';
import wrong2 from './wrong2';
import wrong3 from './wrong3';

const implementations = {
  right1, wrong1, wrong2, wrong3,
};

export default () => {
  const name = process.env.FUNCTION_VERSION || 'right1';
  return () => new implementations[name]();
};
