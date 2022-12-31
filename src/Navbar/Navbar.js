import'./navbar.css';
import Add from '../Add/Add';
 
export default function Navbar({ setPostSubmitted}){

    function newPost(){
        setPostSubmitted(false);
    }
    

    return(
<div className='Nav'>
<div className='search' >
<label htmlFor='search'>search</label>
<input id='search' placeholder='پیدا کن...'/>
<Add className="btn__search  btn" textBtn='بگرد'/>
</div>
<Add ocClick={newPost} className="btn__add  btn" textBtn='افزودن مخاطب'/>
</div>
    )
    
} 