import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { ResultBox } from './style';
import { calculateExchangedAmount } from '../../utils';

export function ExchangeResultBox({ from, to, amount }) {
  return (
    <ResultBox>
      <h1>
        {`${to} `}
        {calculateExchangedAmount({ from, to, amount })}
      </h1>
      <div>기준일:</div>
    </ResultBox>
  );
}

ExchangeResultBox.propTypes = {
  fromCurrency: PropTypes.string.isRequired,
  toCurrency: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};
