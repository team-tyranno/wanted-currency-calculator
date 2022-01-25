// const data = {
//   USDKRW: 19239123,
//   USDCAD: 13333,
//   USDNVI: 12345,
//   USDUSD: 1,
// };

export const putComma = (amount) => {
  return amount.toLocaleString('en', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); // String with 2 digits
};

export const calculateExchangedAmount = ({ from, to, amount }) => {
  const fromCountryCode = 'USD' + from;
  const toCountryCode = 'USD' + to;

  const exchangeRate = data[fromCountryCode] / data[toCountryCode];
  const exchangedAmount = exchangeRate * amount;

  return putComma(exchangedAmount);
};
