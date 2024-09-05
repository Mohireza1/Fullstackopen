const Form = ({
  setNewName,
  newName,
  newNum,
  setNewNum,
  setPersons,
  persons,
}) => {
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

  return (
    <div>
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
    </div>
  );
};

export default Form;
