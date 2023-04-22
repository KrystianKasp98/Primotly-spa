interface ParsedUrl {
  url: string;
  query: Record<string, string>;
}

export const cutString = (val: string, to: number) =>
  val.length > to + 3 ? `${val.slice(0, to)}...` : val;

export const getLastPage = (count: number, pageSize: number = 10) =>
  Math.max(Math.round(count / pageSize), 1);

export const parseUrl = (url: string): ParsedUrl => {
  const [baseUrl, queryStr] = url.split('?');
  const queryParams: Record<string, string> = {};

  if (queryStr) {
    const queryPairs = queryStr.split('&');

    for (const pair of queryPairs) {
      const [key, value] = pair.split('=');
      if (key && value) {
        queryParams[key] = decodeURIComponent(value);
      }
    }
  }

  return {
    url: baseUrl || '',
    query: queryParams
  };
};
