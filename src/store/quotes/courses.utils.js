import { v4 as uuidv4 } from "uuid";

export function addQuote(quotes, quoteItem) {
  return [...quotes, { id: uuidv4(), ...quoteItem }];
}

export function removeQuote(quotes, id) {
  return quotes.filter((quote) => quote.id !== id);
}
