import axios from "axios";

export const getNotes = () =>
  axios.get("http://calhost:3001/notes").then((res) => res.data);
