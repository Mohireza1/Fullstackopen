import { useState } from "react";
import Entry from "./components/Entry";
import Form from "./components/Form";
import Search from "./components/Search";

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

  return (
    <div>
      <h2>Phonebook</h2>
      <Search setSearchPhrase={setSearchPhrase} />
      <h2>Add New</h2>
      <Form
        setNewName={setNewName}
        newName={newName}
        setNewNum={setNewNum}
        newNum={newNum}
        setPersons={setPersons}
        persons={persons}
      />
      <h2>Numbers</h2>
      {results.map((per) => (
        <Entry key={per.key} person={per} />
      ))}
    </div>
  );
};

export default App;
