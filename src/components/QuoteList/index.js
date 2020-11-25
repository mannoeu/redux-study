import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import * as S from "./styles";

function QuoteList() {
  const dispatch = useDispatch();
  const quotes = useSelector((state) => state.quotes.data);

  const [author, setAuthor] = useState("");
  const [quote, setQuote] = useState("");

  /* Action Creator */
  function addQuoteAction(title, description) {
    return { type: "ADD_QUOTE", payload: { author, quote } };
  }

  function removeQuoteAction(id) {
    return { type: "REMOVE_QUOTE", payload: id };
  }

  function addQuote(event) {
    event.preventDefault();

    if (!author || !quote) {
      alert("Preencha todos os campos");
      return;
    }

    /* Dispatch */
    dispatch(addQuoteAction(author, quote));

    setAuthor("");
    setQuote("");
  }

  function removeQuote(id) {
    dispatch(removeQuoteAction(id));
  }

  React.useEffect(() => {
    dispatch({
      type: "ASYNC_LOAD_QUOTE",
    });
  }, [dispatch]);

  return (
    <>
      <S.Form onSubmit={addQuote}>
        <fieldset>
          <legend>New Quote</legend>
          <S.Field>
            <label htmlFor="title">Author</label>
            <input
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              type="text"
              id="author"
              name="author"
              placeholder="Author..."
            />
          </S.Field>
          <S.Field>
            <label htmlFor="quote">Quote</label>
            <input
              value={quote}
              onChange={(e) => setQuote(e.target.value)}
              type="text"
              id="quote"
              name="quote"
              placeholder="Type the quote..."
            />
          </S.Field>
          <S.Button>Save</S.Button>
        </fieldset>
      </S.Form>
      <S.Container>
        {quotes?.map((quote) => (
          <S.Card key={quote.id}>
            <S.DeleteButton onClick={() => removeQuote(quote.id)} />
            <h3>{quote.author}</h3>
            <p>{quote.quote}</p>
          </S.Card>
        ))}
      </S.Container>
    </>
  );
}

export default QuoteList;
