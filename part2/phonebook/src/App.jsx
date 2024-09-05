import { useState } from "react";

const Entry = ({ person }) => <p key={person.key}>{person.name}</p>;

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", key: 1 }]);
  const [newName, setNewName] = useState("");

  const handleName = (e) => {
    setNewName(e.target.value);
    console.log(e.target.value);
  };

  const addPerson = (e) => {
    e.preventDefault();
    const nameObj = { name: newName, key: persons.length + 1 };

    setPersons(persons.concat(nameObj));
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleName} />
        </div>
        <div>
          <button type="submit" onClick={addPerson}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((per) => (
        <Entry person={per} />
      ))}
    </div>
  );
};

export default App;
