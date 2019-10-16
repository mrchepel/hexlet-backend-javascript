import { getX, getY } from '@hexlet/points';
import {
  isEmpty, head, tail, length,
} from '@hexlet/pairs-data';

const getSegmentLength = (point1, point2) => {
  const x1 = getX(point1);
  const y1 = getY(point1);
  const x2 = getX(point2);
  const y2 = getY(point2);
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
};

export default (vertices) => {
  if (length(vertices) < 3) {
    return null;
  }
  const startPoint = head(vertices);
  const iter = (list) => {
    const currentPoint = head(list);
    const rest = tail(list);
    if (isEmpty(rest)) {
      return getSegmentLength(currentPoint, startPoint);
    }
    const nextPoint = head(rest);
    return getSegmentLength(currentPoint, nextPoint) + iter(rest);
  };
  return iter(vertices);
};
