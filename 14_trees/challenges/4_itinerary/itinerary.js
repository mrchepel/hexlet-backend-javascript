import _ from 'lodash';

const makeRoute = ([city, rest], route = []) => {
  const newRoute = route.concat(city);
  if (!rest) {
    return newRoute.join('/');
  }
  return rest.map((elem) => makeRoute(elem, newRoute));
};

const getRoute = (routes, city) => routes.find((elem) => _.last(elem) === city);

const getPartsOfRoute = (route1, route2) => {
  const commonRoute = route1.filter((elem, i) => elem === route2[i]);
  const turn = _.last(commonRoute);

  const startRoute = route1.filter((elem, i) => elem !== route2[i]);
  const finishRoute = route2.filter((elem, i) => elem !== route1[i]);

  return [startRoute, turn, finishRoute];
};

const itinerary = (tree, start, finish) => {
  const routes = makeRoute(tree);
  const listRoutes = _.flattenDeep(routes).map((item) => item.split('/'));

  const route1 = getRoute(listRoutes, start);
  const route2 = getRoute(listRoutes, finish);

  const [initialRoute, turn, finalRoute] = getPartsOfRoute(route1, route2);

  return initialRoute.reverse().concat(turn, finalRoute);
};

export default itinerary;
