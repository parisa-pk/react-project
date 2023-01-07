import { useState } from "react";
import Add from "../Add/Add";
import"./addContact.css";
import PasSave from "../Notes/pasSave";



export default function AddContact(){


    const[valueName , setValueName] =useState("");
    const[valueLastName , setValueLastName]=useState("");
    const[valueTel , setValueTel] = useState("")
    const[valueEmail , setValueEmail]=useState("");
    const[valueAge , setValueAge]=useState("");
    const[valueGender , setValueGender]= useState("");
    const[valueAddress , setValueAddress] = useState("");
    

    const[note , setNote]=useState(<PasSave/>)


    function addedContact(newNote){
      setNote([...note, newNote]);
    }
    
  
    
    function handleForm(newName , newLastName , newEmail ,newTel ,newAge , newGender , newAddress){



        setValueName(newName);
        setValueLastName(newLastName);
        setValueEmail(newEmail);
        setValueTel(newTel);
        setValueAge(newAge);
        setValueGender(newGender);
        setValueAddress(newAddress);
        


        localStorage.setItem(`newpost`, JSON.stringify({
            name: newName,
            lastName: newLastName,
            email: newEmail,
            tel: newTel,
            age:newAge,
            gender:newGender,
            address:newAddress,
        }))
        }






       

  function handleSubmit(e) {
    e.preventDefault();
    if (valueName === '' &&  valueLastName === ''  && valueTel === "" && valueEmail === "" ) {
        alert("لطفا گزینه های خالی را پر کنید!!!")
        return;
    }


 addedContact({
  valueName , valueLastName  ,valueTel ,valueEmail  , valueGender , valueAddress
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
            <input className="inp__form" required value={valueName} id="name" onChange={handleNameChange} type="text" name="name" placeholder="نام مخاطب"/>
            
            
            <label htmlFor="lastName">نام خانوادگی</label>
            <input required className="inp__form" value={valueLastName} id="lastName" onChange={handleLastNameChange} type="text" name="lastName" placeholder="نام خانوادگی مخاطب"/>
            

            
            <label htmlFor="tel">تلفن</label>
            <input id="tel" required type="tel" className="inp__form" onChange={handleTelChange} value={valueTel} name="tel" placeholder="شماره تلفن مخاطب"/>
            

            
            <label htmlFor="email">ایمیل</label>
            <input id="email" required value={valueEmail} className="inp__form" onChange={handleEmailChange} name="email" type="email" placeholder="ایمیل مخاطب"/>
            

            
            <label htmlFor="age">سن</label>
            <input id="age" onChange={handleAgeChange} value={valueAge} className="inp__form" type="number" name="age" placeholder="سن مخاطب"/>
            

            
            <label htmlFor="gender" name="gender" onChange={handleGenderChange}  value={valueGender}>جنسیت</label>
            <select id="gender">
                <option  value="female">زن</option>
                <option  value="male" >مرد</option>
                
            </select>
            

            
            <label htmlFor="address">آدرس</label>
            <input className="inp__form" name="address" id="address" value={valueAddress} onChange={handleAddressChange} type="text" placeholder="آدرس مخاطب"/>

            
            
            <Add onClick={handleForm} className="btn btn__form" textBtn="ثبت"/>

    </form>
  );
}