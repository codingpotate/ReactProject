import './leftBar.css'
import IKImageComponent  from "../image/image"
const LeftBar = () => {
    return(
        <div className='leftBar'>
            <div className="menuIcons">
                <a href="/" className="menuIcon">
                <IKImageComponent  path="/general/logo.png" alt ="" className="logo"/>
                </a>
                <a href="/" className="menuIcon">
                <IKImageComponent  path="/general/home.svg" alt =""/>
                </a>
                <a href="/" className="menuIcon">
                <IKImageComponent  path="/general/create.svg" alt =""/>
                </a>
                <a href="/" className="menuIcon">
                <IKImageComponent  path="/general/updates.svg" alt =""/>
                </a>
                <a href="/" className="menuIcon">
                <IKImageComponent  path="/general/messages.svg" alt =""/>
                </a>
            </div>
                <a href="/" className="menuIcon">
                <IKImageComponent  path="/general/settings.svg" alt =""/>
                </a>
        </div>
    )
}

export default LeftBar