import { useState, useEffect } from "react";
import axios from "axios";
import Entry from "./components/Entry";
import Form from "./components/Form";
import Search from "./components/Search";

const App = () => {
  const [persons, setPersons] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then((result) => setPersons(result.data));
  }, []);
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
        <Entry key={per.id} person={per} />
      ))}
    </div>
  );
};

export default App;
