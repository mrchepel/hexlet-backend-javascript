import { flatten } from 'lodash';

export default (users) => flatten(users.map((user) => user.children));
