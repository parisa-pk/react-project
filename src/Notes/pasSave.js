import"./note.css"

export default function PasSave({name , lastName , tel , email , gender , address}){
    return(
        <>
        
<div className="note">
      <h3>
        
         {name="علی"} {lastName= "منتظری"}
      </h3>
      <p>
      تلفن:<a href="tel:02177524548">{tel="02177524548"}</a>
      </p>
      <p>
      ایمیل:<a href="mailto:alimontazeri@gmail.com">{email="alimontazeri@gmail.com"}</a>
      </p>  
      <p>
      جنسیت:{gender="مرد"}
      </p>
      <p>
      آدرس:{address="نارمک میدان 88"}
      </p>

</div>
 
 
<div className="note">
      <h3>
        {name ="نیکا"} {lastName="علیشاهی"}
      </h3>
      <p>
      تلفن:<a href="tel:">{tel="09125754869"}</a>
      </p>
      <p>
      ایمیل:<a href="mailto:nikaiiiii@gmail.com">{email="nikaiiiii@gmail.com"}</a> 
      </p>  
      <p>
      جنسیت:{gender="زن"}
      </p>
      <p>
      آدرس:{address="سعادت آباد بلوار پاکنژاد"}
      </p>

</div>
        </>
    )
}