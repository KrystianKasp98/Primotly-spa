export const cutString = (val: string, to: number) =>
  val.length > to + 3 ? `${val.slice(0, to)}...` : val;
