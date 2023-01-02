

export default function PasSave({name , lastName , tel , email , gender , address}){
    return(
        <>
        
<div className="note">
      <h3>
        نام:{name="علی"} {lastName= "منتظری"}
      </h3>
      <p>
      تلفن:{tel="02177524548"}
      </p>
      <p>
      ایمیل:{email="alimontazeri@gmail.com"}
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
        نام:{name ="نیکا"} {lastName="علیشاهی"}
      </h3>
      <p>
      تلفن:{tel="09125754869"}
      </p>
      <p>
      ایمیل:{email="nikaiiiii@gmail.com"}
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