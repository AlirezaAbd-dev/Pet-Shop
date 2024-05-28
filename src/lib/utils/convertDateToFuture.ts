export default function convertDateToFuture(number: number) {
  const date1 = new Date();
  const date2 = new Date();

  date2.setMinutes(date1.getMinutes() + number);
  const diffInMilliseconds = date2.getTime() - date1.getTime();
  return Math.floor(diffInMilliseconds / 1000);
}
