import { format, parseISO, formatDistanceToNow, add } from 'date-fns';
import { ko } from 'date-fns/locale';

/*export const formatted = (date) => {
  const localDate = parseISO(date);

  const adjustedDate = add(localDate, { hours: 9 });
  console.log(new Date());
  console.log(adjustedDate);
  const formattedDate = format(adjustedDate, 'yyyy년 MM월 dd일', {
    locale: ko,
  });

  return formattedDate;
};*/

export const getDateDistance = (date) => {
  const localDate = parseISO(date);
  const adjustedDate = add(localDate, { hours: 9 });

  return formatDistanceToNow(adjustedDate, {
    locale: ko,
  });
};

export const dateFormat = (localDate) => {
  if (localDate) {
    let [date, time] = localDate.split('T');
    time = time.split(':').slice(0, 2).join(':');
    return date + ' ' + time;
  }
  return localDate;
};
/*export const dateFormat = (date) => {
  const koreanDate = add(parseISO(date), { hours: 9 });
  const formattedDate = format(koreanDate, 'yyyy-MM-dd HH:mm', {
    locale: ko,
  });
  return formattedDate;
};*/
