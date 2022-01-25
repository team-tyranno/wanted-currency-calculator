export const isNotNumber = (moneyInput) => {
  return isNaN(moneyInput);
};

export const isOverThreshold = (moneyInput, threshold) => {
  return moneyInput > threshold;
};

export const isUnderZero = (moneyInput) => {
  return moneyInput < 0;
};

export const validateMoneyInput = ({ moneyInput, threshold }) => {
  if (isNotNumber(moneyInput)) return false;
  if (isOverThreshold(moneyInput, threshold)) return false;
  if (isUnderZero(moneyInput)) return false;
  return true;
};
