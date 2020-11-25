import { all, takeLatest, put, call } from "redux-saga/effects";
import { v4 as uuidv4 } from "uuid";

async function loadTodos() {
  const res = await fetch("https://type.fit/api/quotes");
  const toJson = await res.json();

  const data = toJson.slice(0, 10);
  const formated = data.map((item) => {
    return {
      id: uuidv4(),
      author: item.author,
      quote: item.text,
    };
  });

  return formated;
}

function* asyncGetQuotes() {
  const res = yield call(loadTodos);

  yield put({
    type: "LOAD_QUOTE",
    payload: {
      data: res,
    },
  });
}

export default function* root() {
  yield all([takeLatest("ASYNC_LOAD_QUOTE", asyncGetQuotes)]);
}
