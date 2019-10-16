const singleTagsList = new Set(['hr', 'img', 'br']);

const propertyActions = [
  {
    name: 'body',
    check: (arg) => typeof arg === 'string',
    processing: (body) => body,
  },
  {
    name: 'children',
    check: (arg) => arg instanceof Array,
    processing: (children, fn) => children.map(fn),
  },
  {
    name: 'attributes',
    check: (arg) => arg instanceof Object,
    processing: (attributes) => attributes,
  },
];

const getPropertyAction = (arg) => propertyActions.find(({ check }) => check(arg));

const buildAttrString = (attributes) => Object.keys(attributes).map((key) => ` ${key}="${attributes[key]}"`).join('');

const getNodeComponents = (components, fn) => components.reduce(
  (acc, component) => {
    const { name, processing } = getPropertyAction(component);
    return { ...acc, [name]: processing(component, fn) };
  }, {},
);

export const parse = (data) => {
  const [first, ...rest] = data;
  const root = {
    name: first,
    attributes: {},
    body: '',
    children: [],
  };
  return { ...root, ...getNodeComponents(rest, parse) };
};

export const render = (ast) => {
  const {
    name, attributes, body, children,
  } = ast;
  const restComponents = (singleTagsList.has(name)) ? '' : `${body}${children.map(render).join('')}</${name}>`;
  return [`<${name}${buildAttrString(attributes)}>`, restComponents].join('');
};
