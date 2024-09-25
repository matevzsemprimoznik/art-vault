import { helper } from '@ember/component/helper';

export default helper(function date([date]) {
  date = new Date(date);
  if (!date) return '';

  const formattedDate =
    ('0' + (date.getMonth() + 1)).slice(-2) +
    '/' +
    ('0' + date.getDate()).slice(-2) +
    '/' +
    date.getFullYear();

  const formattedTime =
    ('0' + date.getHours()).slice(-2) +
    ':' +
    ('0' + date.getMinutes()).slice(-2);

  return `${formattedDate} ${formattedTime}`;
});
