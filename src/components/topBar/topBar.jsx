import './topBar.css'
import UserButton from '../userButton/userButton'
import IKImageComponent  from "../image/image"

const TopBar = () => {
    return(
        <div className='topBar'>
            <div className='search'>
            <IKImageComponent  path = "/general/search.svg"/>
            <input type="text" placeholder='Search'/>
                
            </div>
            <UserButton/>
        </div>
    )
}

export default TopBar