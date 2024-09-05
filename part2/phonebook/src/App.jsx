import { useState } from "react";

const Entry = ({ person }) => (
  <p>
    {person.name}: {person.num}
  </p>
);

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", num: "040-123456", key: 1 },
    { name: "Ada Lovelace", num: "39-44-5323523", key: 2 },
    { name: "Dan Abramov", num: "12-43-234345", key: 3 },
    { name: "Mary Poppendieck", num: "39-23-6423122", key: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");

  const [searchPhrase, setSearchPhrase] = useState("");

  const results =
    searchPhrase.length > 0
      ? persons.filter((per) => per.name.toLowerCase().includes(searchPhrase))
      : persons;

  const handleName = (e) => {
    setNewName(e.target.value);
  };
  const handleNum = (e) => {
    setNewNum(e.target.value);
  };

  const addPerson = (e) => {
    e.preventDefault();
    const nameObj = {
      name: newName,
      num: String(newNum),
      key: persons.length + 1,
    };

    if (persons.filter((person) => person.name === nameObj.name).length > 0) {
      alert(`${nameObj.name} already exists!`);
    } else {
      setPersons(persons.concat(nameObj));
    }
  };

  const search = (e) => {
    setSearchPhrase(e.target.value.toLowerCase());
  };

  return (
    <div>
      <h2>Phonebook</h2>
      search: <input onChange={search}></input>
      <h2>Add New</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleName} />
          <br />
          number: <input value={newNum} onChange={handleNum} />
        </div>
        <div>
          <button type="submit" onClick={addPerson}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {results.map((per) => (
        <Entry key={per.key} person={per} />
      ))}
    </div>
  );
};

export default App;
