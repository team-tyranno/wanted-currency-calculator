import request from './request';

const checkDateIsOver = (currentDate, scheduleDate) =>
  currentDate - scheduleDate / (60 * 60 * 1000) <= 24 ? false : true;

const setStorage = async (currentDate) => {
  const { get } = request;

  const data = await get(
    `${process.env.REACT_APP_API_END_POINT}?access_key=${process.env.REACT_APP_API_ACCESS_KEY}`,
  );

  localStorage.setItem('date', currentDate.toDateString());
  localStorage.setItem('exchangeRate', JSON.stringify(data));
};

// 리펙토링 필요!
export const getExchangeRate = () => {
  const { quotes } = JSON.parse(localStorage.getItem('exchangeRate'));
  return quotes;
};

// 리팩토링 필요!
export const getTargetExchangeRate = (country) => {
  const { quotes } = JSON.parse(localStorage.getItem('exchangeRate'));
  return quotes[`USD${country}`];
};

export const checkSchedule = async () => {
  const currentDate = new Date();
  const scheduleDate = localStorage.getItem('date');
  const exchangeRate = localStorage.getItem('exchangeRate');

  if (scheduleDate && Object.keys(exchangeRate).length) {
    if (checkDateIsOver(currentDate, scheduleDate)) setStorage(currentDate);
  } else {
    setStorage(currentDate);
  }
};
