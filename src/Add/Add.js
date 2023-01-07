import './add.css';


export default function Add({textBtn , onClick , className}){
    return(
        <>
            <button onClick={onClick} type='submit' className={className}>
            {textBtn}
            </button>
        </>
    )
}
