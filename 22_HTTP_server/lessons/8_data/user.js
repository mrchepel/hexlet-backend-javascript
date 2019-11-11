let id = 1000;

export const nextId = () => {
  id += 1;
  return id;
};

export const validate = ({ name, phone }) => {
  const errors = [];
  const presenceMessage = "can't be blank";

  if (!name || name === '') {
    errors.push({ source: 'name', title: presenceMessage });
  }

  if (!name.match(/^[\w]+$/i)) {
    errors.push({ source: 'name', title: 'bad format' });
  }

  if (!phone || phone === '') {
    errors.push({ source: 'phone', title: presenceMessage });
  }

  return errors;
};
