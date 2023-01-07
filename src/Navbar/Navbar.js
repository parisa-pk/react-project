import'./navbar.css';
import Add from '../Add/Add';
import { useNavigate } from 'react-router-dom';
 
export default function Navbar(){
const navigate = useNavigate()

    function openForm(){
    navigate(`/Add`)
}

    return(

<div className='Nav'>
<div className='search' >
<label htmlFor='search'>search</label>
<input id='search' className='inp__nav' placeholder='پیدا کن...'/>
<Add  className="btn__search  btn" textBtn='بگرد'/>
</div>
<Add onClick={openForm} className="btn__add  btn" textBtn="افزودن مخاطب"/>
</div>
    )
    
} 