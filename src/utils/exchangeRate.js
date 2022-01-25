import { getExchangeRate } from './localStorage';

export const putComma = (amount) =>
  amount.toLocaleString('en', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export const calculateExchangeRate = ({ from, to }) => {
  const exchangeRateData = getExchangeRate('quotes');

  const fromCountryCode = `USD${from}`;
  const toCountryCode = `USD${to}`;

  return exchangeRateData[toCountryCode] / exchangeRateData[fromCountryCode];
};

export const calculateExchangedAmount = ({ from, to, amount }) => {
  const exchangeRate = calculateExchangeRate({ from, to });

  const exchangedAmount = exchangeRate * amount;

  return putComma(exchangedAmount);
};
