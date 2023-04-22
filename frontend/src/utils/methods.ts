export const cutString = (val: string, to: number) =>
  val.length > to + 3 ? `${val.slice(0, to)}...` : val;

export const getLastPage = (count: number, pageSize: number = 10) =>
  Math.max(Math.round(count / pageSize), 1);
