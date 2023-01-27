const API_KEY =
  "94bef2893bf88beda78d439e7991f68755878e694d836914fba2faa7be8d5f26";

export const loadTicker = (tickerName) =>
  fetch(
    `https://min-api.cryptocompare.com/data/price?fsym=${tickerName}&tsyms=USD&api_key=${API_KEY}`
  ).then((r) => r.json());
