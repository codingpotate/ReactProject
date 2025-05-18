import './topBar.css'
import UserButton from '../userButton/userButton'
import IKImageComponent  from "../image/image"
import { useNavigate } from 'react-router-dom'

const TopBar = () => {
    const navigate = useNavigate()
    const handleSubmit=(e) =>{
        e.preventDefault();
        navigate(`/search?search=${e.target[0].value}`)
    };
    return(
        <div className='topBar'>
            <form onSubmit={handleSubmit} className='search'>
            <IKImageComponent  path = "/general/search.svg"/>
            <input type="text" placeholder='Search'/>
                
            </form>
            <UserButton/>
        </div>
    )
}

export default TopBar