function VisibilityFilter() {
  const filterSelected = (value) => {
    console.log(value);
  };

  return (
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
  );
}

export default VisibilityFilter;
