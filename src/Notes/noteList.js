import Note from "./Note"


export default function NoteList({name , lastName , tel , email , gender , address , notes }){

    return(
        <div>
            {notes.map(()=><Note name={name} lastName={lastName} tel={tel} email={email} gender={gender} address={address} />)
            }
        </div>
    )
}