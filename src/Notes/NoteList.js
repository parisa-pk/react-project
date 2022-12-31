import Note from "./Note";
import NotesContext from "../NotesContext";
import { useContext } from "react";


export default function NoteList(){
  const value = useContext(NotesContext);

  return (<div>
    
    {value.notes.map(
      (note)=> <Note title={note.title} content={note.content} key={note.title} />
    )}


  </div>);
}