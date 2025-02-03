import { createSlice, current } from "@reduxjs/toolkit";
import noteService from "../services/notes";

// const initialState = [
//   {
//     content: "reducer defines how redux store works",
//     important: true,
//     id: 1,
//   },
//   {
//     content: "state of store can contain any data",
//     important: false,
//     id: 2,
//   },
// ];

const generateId = () => Number((Math.random() * 1000000).toFixed(0));

const noteSlice = createSlice({
  name: "notes",
  initialState: [],
  reducers: {
    createNote(state, action) {
      // const content = action.payload;
      // state.push({
      //   content,
      //   important: false,
      //   id: generateId(),
      // });
      state.push(action.payload);
    },
    toggleImportanceOf(state, action) {
      const toggledNote = action.payload;
      // const noteToChange = state.find((note) => note.id === toggledNote.id);
      // const changedNote = {
      //   ...noteToChange,
      //   important: !noteToChange.important,
      // };
      console.log(current(state));
      return state.map((note) =>
        note.id !== toggledNote.id ? note : toggledNote
      );
    },
    appendNote(state, action) {
      state.push(action.payload);
    },
    setNotes(state, action) {
      return action.payload;
    },
  },
});

export const { createNote, toggleImportanceOf, appendNote, setNotes } =
  noteSlice.actions;

export const initializeNotes = () => {
  return async (dispatch) => {
    const notes = await noteService.getAll();
    dispatch(setNotes(notes));
  };
};

export const addNewNote = (content) => {
  return async (dispatch) => {
    const note = await noteService.createNew(content);
    dispatch(createNote(note));
  };
};

export default noteSlice.reducer;
