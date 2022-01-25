const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const timestampToDate = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const year = date.getFullYear();
  const month = months[date.getMonth()];
  let day = date.getDate();

  day = day >= 10 ? day : `0${day}`;

  return `${year}-${month}-${day}`;
};
