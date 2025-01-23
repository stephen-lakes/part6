import ReactDOM from "react-dom/client";

import { createStore, combineReducers } from "redux";
import App from "./App";
import { Provider } from "react-redux";
import noteReducer, { createNote } from "./reducers/noteReducer";
import filterReducer, { filterChange } from "./reducers/filterReducer";

const reducer = combineReducers({
  notes: noteReducer,
  filter: filterReducer,
});

const store = createStore(reducer);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
