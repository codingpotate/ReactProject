import IKImageComponent from '../image/image'
import './postInteractions.css'

const postInteractions = () => {
    return(
        <div className='postInteractions'>
            <div className="interactionIcons"></div>
            <IKImageComponent path="/general/react.svg" alt=""/>
            273
            <IKImageComponent path="/general/share.svg" alt=""/>
            <IKImageComponent path="/general/more.svg" alt=""/>
            <button>Save</button>
        </div>
    )
}

export default postInteractions