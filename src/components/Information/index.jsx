import React from 'react';
import { PropTypes } from 'prop-types';
import { calculateExchangedAmount } from '../../utils';

function ExchangeRate({ country, value }) {
  return (
    <div>
      수취금액은
      {calculateExchangedAmount({ from: 'USD', to: country, amount: value })}
      {country}
      입니다.
    </div>
  );
}

function Alert() {
  return <div className="calc-alert">송금액이 바르지 않습니다.</div>;
}

export function Information({ country, value, isValid }) {
  return isValid ? <ExchangeRate country={country} value={value} /> : <Alert />;
}

ExchangeRate.propTypes = {
  country: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

Information.propTypes = {
  country: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  isValid: PropTypes.bool.isRequired,
};
