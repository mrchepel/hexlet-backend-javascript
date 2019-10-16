const propertyActions = [
  {
    name: 'body',
    check: (arg) => typeof arg === 'string',
  },
  {
    name: 'children',
    check: (arg) => arg instanceof Array,
  },
  {
    name: 'attributes',
    check: (arg) => arg instanceof Object,
  },
];

const getPropertyAction = (arg) => propertyActions.find(({ check }) => check(arg));

const buildAttrString = (attributes) => Object.keys(attributes).map((key) => ` ${key}="${attributes[key]}"`).join('');

const buildHtml = (data) => {
  const [first, ...rest] = data;
  const root = {
    name: first,
    attributes: {},
    body: '',
    children: [],
  };
  const tag = rest.reduce((acc, arg) => {
    const { name } = getPropertyAction(arg);
    return { ...acc, [name]: arg };
  }, root);

  return [`<${tag.name}${buildAttrString(tag.attributes)}>`,
    `${tag.body}${tag.children.map(buildHtml).join('')}`,
    `</${tag.name}>`,
  ].join('');
};

export default buildHtml;
