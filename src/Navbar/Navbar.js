import'./navbar.css';
import Add from '../Add/Add';
import { useNavigate } from 'react-router-dom';
 
export default function Navbar({ setPostSubmitted}){
const navigate = useNavigate()

    function newPost(){
        setPostSubmitted(false);
        
    }
    function openForm(){
    navigate("/Add")
}

    return(
<div className='Nav'>
<div className='search' >
<label htmlFor='search'>search</label>
<input id='search' placeholder='پیدا کن...'/>
<Add onClick={openForm} className="btn__search  btn" textBtn='بگرد'/>
</div>
<Add ocClick={newPost} className="btn__add  btn" textBtn='افزودن مخاطب'/>
</div>
    )
    
} 