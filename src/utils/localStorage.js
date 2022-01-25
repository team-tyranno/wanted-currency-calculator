import request from './request';

function checkDateIsOver(currentDate, scheduleDate) {
  return currentDate - scheduleDate / (60 * 60 * 1000) <= 24 ? false : true;
}

const setStorage = async (currentDate) => {
  const { get } = request;

  const data = await get(
    `${process.env.REACT_APP_API_END_POINT}?access_key=${process.env.REACT_APP_API_ACCESS_KEY}`,
  );

  localStorage.setItem('date', currentDate.toDateString());
  localStorage.setItem('exchangeRate', JSON.stringify(data));

  return data;
};

export const getExchangeRate = (name) => {
  const response = JSON.parse(localStorage.getItem('exchangeRate'));

  if (!response) {
    return setStorage(new Date());
  } else {
    return response[name];
  }
};

export const checkSchedule = () => {
  const currentDate = new Date();
  const scheduleDate = localStorage.getItem('date');
  const exchangeRate = localStorage.getItem('exchangeRate');

  if (scheduleDate && exchangeRate) {
    if (checkDateIsOver(currentDate, scheduleDate)) setStorage(currentDate);
  } else {
    setStorage(currentDate);
  }
};
