import './add.css';


export default function Add({textBtn , className}){
    return(
        <>
            <button type='submit' className={className}>
            {textBtn}
            </button>
        </>
    )
}
