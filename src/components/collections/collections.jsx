import IKImageComponent from '../image/image'
import './collections.css'

const Collections = () =>{
    return(
        <div className = 'collections'>
            {/*Collections*/}
            <div className="collection">
            <IKImageComponent path="/pins/pin1.jpeg" alt = ""/>
            <div className="collectionInfo">
                <h1>Minimalist Bedrooms</h1>
                <span>12 pins . 1w</span>
               </div>
        </div>
        <div className="collection">
            <IKImageComponent path="/pins/pin1.jpeg" alt = ""/>
            <div className="collectionInfo">
                <h1>Minimalist Bedrooms</h1>
                <span>12 pins . 1w</span>
               </div>
        </div>
            <div className="collection">
            <IKImageComponent path="/pins/pin1.jpeg" alt = ""/>
            <div className="collectionInfo">
                <h1>Minimalist Bedrooms</h1>
                <span>12 pins . 1w</span>
               </div>
        </div>
            <div className="collection">
            <IKImageComponent path="/pins/pin1.jpeg" alt = ""/>
            <div className="collectionInfo">
                <h1>Minimalist Bedrooms</h1>
                <span>12 pins . 1w</span>
               </div>
        </div>
            <div className="collection">
            <IKImageComponent path="/pins/pin1.jpeg" alt = ""/>
            <div className="collectionInfo">
                <h1>Minimalist Bedrooms</h1>
                <span>12 pins . 1w</span>
               </div>
        </div>

            <div className="collection">
            <IKImageComponent path="/pins/pin1.jpeg" alt = ""/>
            <div className="collectionInfo">
                <h1>Minimalist Bedrooms</h1>
                <span>12 pins . 1w</span>
               </div>
        </div>
        </div>
        

    )
} 

export default Collections