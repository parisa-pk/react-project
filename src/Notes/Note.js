import "./note.css";


export default function Note({name , lastName , tel , email , gender , address  }){


 



  return (

<div className="note">
      <h3>
        {name} {lastName}
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