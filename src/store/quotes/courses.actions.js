export function addQuoteAction(author, quote) {
  return { type: "ADD_QUOTE", payload: { author, quote } };
}

export function removeQuoteAction(id) {
  return { type: "REMOVE_QUOTE", payload: id };
}
