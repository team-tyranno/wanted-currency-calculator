import React from 'react';
import { PropTypes } from 'prop-types';
import { ResultBox } from './style';
import { calculateExchangedAmount } from '../../utils';
import { timestampToDate } from '../../utils/timestampToDate';
import { getExchangeRate } from '../../utils/localStorage';

export function ExchangeResultBox({ from, to, amount }) {
  const timestamp = getExchangeRate('timestamp');

  return (
    <ResultBox>
      <h1>
        {`${to} `}
        {calculateExchangedAmount({ from, to, amount })}
      </h1>
      <div>{`기준일: ${timestampToDate(timestamp)}`}</div>
    </ResultBox>
  );
}

ExchangeResultBox.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};
