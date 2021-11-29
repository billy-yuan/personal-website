export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const day = date.getDate();

  let formattedDate = { year, month: month.toString(), day: day.toString() };

  if (day < 10) {
    formattedDate = { ...formattedDate, day: "0" + day };
  }

  if (month < 10) {
    formattedDate = { ...formattedDate, month: "0" + month };
  }

  return (
    formattedDate.year + "-" + formattedDate.month + "-" + formattedDate.day
  );
}

export function url(address: string): string {
  return `url('${address}')`;
}
