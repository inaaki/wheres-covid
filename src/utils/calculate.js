import _lang from 'lodash/lang';

/* eslint-disable no-param-reassign */
const covidSchema = {
  critical: {
    value: 0,
    label: 'critical',
  },
  recentCase: {
    value: 0,
    label: 'recently infected',
    recent: true,
  },
  recentDeath: {
    value: 0,
    label: 'recent death',
    recent: true,
  },
  active: {
    value: 0,
    label: 'active',
  },
  totalCase: {
    value: 0,
    label: 'total case',
  },
  totalDeath: {
    value: 0,
    label: 'total death',
  },
  totalRecovery: {
    value: 0,
    label: 'total recovered',
  },
};

export default function calculateStats(data) {
  const num = _lang.toInteger;
  return data.reduce((schema, item) => {
    schema.active.value += num(item.cases.active);
    schema.critical.value += num(item.cases.critical);
    schema.recentCase.value += num(item.cases.new);
    schema.recentDeath.value += num(item.deaths.new);
    schema.totalCase.value += num(item.cases.total);
    schema.totalDeath.value += num(item.deaths.total);
    schema.totalRecovery.value += num(item.cases.recovered);
    return schema;
  }, _lang.cloneDeep(covidSchema));
}

export const calculateToChart = (obj) => ({
  date: obj?.day,
  recovered: obj?.cases?.recovered,
  total: obj?.cases?.total,
  deaths: obj?.deaths?.total,
});
