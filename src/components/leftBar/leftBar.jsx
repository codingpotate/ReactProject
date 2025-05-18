import './leftBar.css'
import IKImageComponent  from "../image/image"
import { Link } from 'react-router-dom'
const LeftBar = () => {
    return(
        <div className='leftBar'>
            <div className="menuIcons">
                <Link to ="/" className="menuIcon">
                <IKImageComponent  path="/general/logo.png" alt ="" className="logo"/>
                </Link>
                <Link to="/" className="menuIcon">
                <IKImageComponent  path="/general/home.svg" alt =""/>
                </Link>
                <Link to="/create" className="menuIcon">
                <IKImageComponent  path="/general/create.svg" alt =""/>
                </Link>
                <Link to="/" className="menuIcon">
                <IKImageComponent  path="/general/updates.svg" alt =""/>
                </Link>
                <Link to="/" className="menuIcon">
                <IKImageComponent  path="/general/messages.svg" alt =""/>
                </Link>
            </div>
                <Link to="/" className="menuIcon">
                <IKImageComponent  path="/general/settings.svg" alt =""/>
                </Link>
        </div>
    )
}

export default LeftBar