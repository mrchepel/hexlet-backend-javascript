import { keyBy, get } from 'lodash';
import { eachDay, format } from 'date-fns';

const normalizeData = (data, beginDate, endDate) => {
  const dates = keyBy(data, 'date');
  const result = eachDay(beginDate, endDate)
    .map((day) => format(day, 'DD.MM.YYYY'))
    .map((date) => get(dates, date, { value: 0, date }));
  return result;
};

export default normalizeData;
