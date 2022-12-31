import { useContext} from "react";
import "./App.css";
import Note from "./Notes/Note";
import Navbar from "./Navbar/Navbar";
import { useState } from "react";
import AddContact from "./AddContact/AddContact";
import Box from "./Box";
import notesContext from "./NotesContext"


export default function Home(){

const value = useContext(notesContext)

    const[name,setName]=useState("");
    const[lastName , setLastName]=useState("");
    const[email , setEmail]=useState("");
    const[tel , setTel]=useState("");
    const[age , setAge]= useState("");
    const[gender , setGender]= useState("");
    const[address , setAddress]= useState("");

    const [notes, setNotes] = useState([]);

    function addContact(newNote){
      setNotes([...notes, newNote]);
    }
  
    
    function handleTable(newName , newLastName , newEmail ,newTel ,newAge , newGender , newAddress){
        setName(newName);
        setLastName(newLastName);
        setEmail(newEmail);
        setTel(newTel);
        setAge(newAge);
        setGender(newGender);
        setAddress(newAddress);
        


        localStorage.setItem(`newpost`, JSON.stringify({
            name: name,
            lastName: lastName,
            email: email,
            tel: tel,
            age:age,
            gender:gender,
            address:address,
          }))
          


    }


    return(
        <div value={{ notes, addContact }}>
            
      <h1>دفترچه تلفن</h1>

      <AddContact />

<Box />



<Navbar/>
{value.name.map((names=><Note   name={names.name} 
lastName={names.lastName} 
tel={names.tel}
email={names.email}
gender={names.gender}
age={names.age}
address={names.address}/>
))}
<AddContact onSubmitted={handleTable}/>

        </div>
    )
}

