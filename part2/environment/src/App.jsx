import { useEffect, useState } from "react";
import axios from "axios";
import Note from "./components/Note";
import ShortUniqueId from "short-unique-id";

const App = () => {
  const uid = new ShortUniqueId({ length: 10 });

  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("new note...");
  const [showAll, setShowAll] = useState(true);

  //   const notesToShow = showAll
  //     ? notes
  //     : notes.filter((note) => note.important === true);

  //   const addNote = (event) => {
  //     event.preventDefault();
  //     const noteObj = {
  //       content: newNote,
  //       important: Math.random() < 0.5,
  //       id: uid.rnd(),
  //     };

  //     setNotes(notes.concat(noteObj));
  //   };

  //   const handleNote = (event) => {
  //     setNewNote(event.target.value);
  //   };

  //   return (
  //     <div>
  //       <h1>Notes</h1>
  //       <button onClick={() => setShowAll(!showAll)}>
  //         Show {showAll ? "important" : "all"}
  //       </button>
  //       <ul>
  //         {notesToShow.map((note) => (
  //           <Note key={note.id} note={note} />
  //         ))}
  //       </ul>
  //       <form onSubmit={addNote}>
  //         <input value={newNote} onChange={handleNote} />
  //         <button type="submit">Submit</button>
  //       </form>
  //     </div>
  //   );
  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/notes").then((resp) => {
      console.log("OK");
      setNotes(resp.data);
    });
  }, []);
  console.log(`render ${notes.length} notes`);
};

export default App;
