import "./App.css";
import NewNote from "./components/NewNote";
import Notes from "./components/Notes";

const App = () => {
  const filterSelected = (value) => {
    console.log(value);
  };

  return (
    <div>
      <NewNote />
      <div>
        all
        <input
          type="radio"
          name="filter"
          id=""
          onChange={() => filterSelected("ALL")}
        />
        important
        <input
          type="radio"
          name="filter"
          id=""
          onChange={() => filterSelected("NIMPORTANT")}
        />
        nonimportant
        <input
          type="radio"
          name="filter"
          id=""
          onChange={() => filterSelected("NONIMPORTANT")}
        />
      </div>
      <Notes />
    </div>
  );
};

export default App;
