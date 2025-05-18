import './galleryItem.css'
import { Link } from "react-router-dom"
import IKImageComponent from "../image/image"

const GalleryItem = ({ item }) => {
  const optimizedHeight = (372 * item.height) / item.width;

  return (
    <Link to={`/pin/${item._id}`} className="galleryItemLink">
      <div
        className="galleryItem"
        style={{ gridRowEnd: `span ${Math.ceil(item.height / 100)}` }}
      >
        <IKImageComponent
          src={item.media}
          alt=""
          w={372}
          h={optimizedHeight}
        />
        <div className="overLay" />
        <button className="saveButton">Save</button>
        <div className="overlayIcons">
          <button>
            <IKImageComponent path="/general/share.svg" alt="" />
          </button>
          <button>
            <IKImageComponent path="/general/share.svg" alt="" />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default GalleryItem;
