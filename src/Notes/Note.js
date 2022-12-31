import {useState} from "react";
import "./note.css"


export default function Note({name , lastName , tel , email , gender , address}){

  var SavedName = [
    {
        name : "علی" ,
        lastName: "منتظری" ,
        email:"alimontazeri@gmail.com" ,
        tel:"02177524548" ,
     },
     {
        name : "نیکا" ,
        lastName: "علیشاهی" ,
        email:"nikaiiiii@gmail.com" ,
        tel:"09125754869" , 
     }
]

const[Name , setName]= useState(SavedName)


function Save(newSave){
    setName([...Name , newSave])
}

  return (

    <div className="note" value={{Name , Save}}>
      <h3>
        نام:{name} {lastName}
      </h3>
      <p>
      تلفن:{tel}
      </p>
      <p>
      ایمیل:{email}
      </p>  
      <p>
      جنسیت:{gender}
      </p>
      <p>
      آدرس:{address}
      </p>

    </div>

  );
}