import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Note from "./Notes/Note";




export default function Home(){

const[notes , setNotes]=useState([])


    return(
        <div>
            
      <h1>دفترچه تلفن</h1>
<Navbar/>

<Note notes={notes} setNotes={setNotes}/>
 
        </div>
    )
}

