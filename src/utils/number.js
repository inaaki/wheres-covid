/* eslint-disable import/prefer-default-export */
import _lang from 'lodash/lang';

// converts large number to certain abbreviated value
export function getNumberAbbreviated(value) {
  const target = _lang.toInteger(value);
  const suffixes = ['', 'k', 'm', 'b', 't'];
  const suffixNum = Math.floor(`${target}`.length / 3);
  let shortValue = parseFloat(
    (suffixNum !== 0 ? target / 1000 ** suffixNum : target).toPrecision(3),
  );
  if (shortValue % 1 !== 0) {
    shortValue = shortValue.toFixed(2);
  }
  return `${shortValue} ${suffixes[suffixNum]}`;
}
