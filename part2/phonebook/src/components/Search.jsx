const Search = ({ setSearchPhrase }) => {
  const search = (e) => {
    setSearchPhrase(e.target.value.toLowerCase());
  };
  return (
    <div>
      search: <input onChange={search}></input>
    </div>
  );
};

export default Search;
