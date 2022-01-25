export const validateMoneyInput = ({ moneyInput, threshold }) => {
  if (isNaN(moneyInput)) return false;
  if (moneyInput > threshold || moneyInput < 0) return false;
  return true;
};
