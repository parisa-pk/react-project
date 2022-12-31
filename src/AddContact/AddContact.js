import { useContext, useState } from "react";
import NotesContext from "../NotesContext";
import Add from "../Add/Add";


export default function AddContact(){


const[valueName , setValueName] =useState("");
const[valueLastName , setValueLastName]=useState("");
const[valueTel , setValueTel] = useState("")
const[valueEmail , setValueEmail]=useState("");
const[valueAge , setValueAge]=useState("");
const[valueGender , setValueGender]= useState("");
const[valueAddress , setValueAddress] = useState("");


const {addContact} = useContext(NotesContext);


  function handleSubmit(e) {
    e.preventDefault();
    if (valueName === '' &&  valueLastName === ''  && valueTel === "" && valueEmail === "" ) {
        alert("لطفا گزینه های خالی را پر کنید!!!")
        return;
    }


 addContact({
  valueName , valueLastName  ,valueTel ,valueEmail  , valueGender
})

}

function handleNameChange(e) {
    const regExp = /^[ا-ی]+$/.test(e.target.value)
    if (regExp) {
        setValueName(e.target.value);
        
    }
}

function handleLastNameChange(e) {
    const regExp = /^[ا-ی]+$/.test(e.target.value)
    if (regExp) {
        
        setValueLastName(e.target.value);
    }
}


function handleAgeChange(e) {
    if(e.target.value.length<3){

        setValueAge(e.target.value);
    }

}
function handleTelChange(e){
setValueTel(e.target.value)
}


function handleAddressChange(e){
    setValueAddress(e.target.value)
    }
    function handleEmailChange(e){
        setValueEmail(e.target.value)
    }

    function handleGenderChange(e){
        setValueGender(e.target.value)
    }


  

  return (
    <form onSubmit={handleSubmit} className="container__form">
      <label htmlFor="name">نام</label>
            <input className="inp__form" required value={valueName} id="name" onChange={handleNameChange} type="text" placeholder="نام مخاطب"/>
            <br/>
            
            <label htmlFor="lastName">نام خانوادگی</label>
            <input required className="inp__form" value={valueLastName} id="lastName" onChange={handleLastNameChange} type="text" placeholder="نام خانوادگی مخاطب"/>
            <br/>

            
            <label htmlFor="tel">تلفن</label>
            <input id="tel" required type="tel" className="inp__form" onChange={handleTelChange} value={valueTel} placeholder="شماره تلفن مخاطب"/>
            <br/>

            
            <label htmlFor="email">ایمیل</label>
            <input id="email" required value={valueEmail} className="inp__form" onChange={handleEmailChange} type="email" placeholder="ایمیل مخاطب"/>
            <br/>

            
            <label htmlFor="age">سن</label>
            <input id="age" onChange={handleAgeChange} value={valueAge} className="inp__form" type="number" placeholder="سن مخاطب"/>
            <br/>

            
            <label htmlFor="gender" onChange={handleGenderChange}  value={valueGender}>جنسیت</label>
            <select id="gender">
                <option  value="female">زن</option>
                <option  value="male" >مرد</option>
                
            </select>
            <br/>

            
            <label htmlFor="address">آدرس</label>
            <input className="inp__form" id="address" value={valueAddress} onChange={handleAddressChange} type="text" placeholder="آدرس مخاطب"/>

            <br/>
            
            <Add className="btn btn__form" textBtn="ثبت"/>

    </form>
  );
}