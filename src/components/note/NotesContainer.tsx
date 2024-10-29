import { useState } from "react";
import { NOTES } from "../../data/notes";
import { NoteType } from "../../types";
import Note from "./note";

function NotesContainer() {
  const [notes] = useState(NOTES);

  return (
    <div className="notes-container">
      {notes.map((note: NoteType) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
}

export default NotesContainer;
