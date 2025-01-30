import ReactDOM from "react-dom/client";

import App from "./App";
import { Provider } from "react-redux";
import noteReducer, { setNotes } from "./reducers/noteReducer";
import filterReducer from "./reducers/filterReducer";
import { configureStore } from "@reduxjs/toolkit";

import noteService from "./services/notes";

const store = configureStore({
  reducer: {
    notes: noteReducer,
    filter: filterReducer,
  },
});

// noteService.getAll().then((notes) => {
//   notes.forEach((note) => {
//     store.dispatch(appendNote(note));
//   });
// });

// noteService.getAll().then((notes) => store.dispatch(setNotes(notes)));

console.log(store.getState());

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
