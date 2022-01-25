export const isNotNumber = (moneyInput) => Number.isNaN(moneyInput);

export const isOverThreshold = (moneyInput, threshold) => moneyInput > threshold;

export const isUnderZero = (moneyInput) => moneyInput < 0;

export const validateMoneyInput = ({ moneyInput, threshold }) => {
  if (isNotNumber(moneyInput)) return false;
  if (isOverThreshold(moneyInput, threshold)) return false;
  if (isUnderZero(moneyInput)) return false;
  return true;
};
