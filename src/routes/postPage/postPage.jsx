import './postPage.css'
import IKImageComponent from "../../components/image/image";
import PostInteractions from "../../components/postInteractions/postInteractions";
import {Link} from "react-router";
import Comments from '../../components/comments/comments';
const PostPage = () => {
return (
    <div className='postpage'>
        <div className="postContainer">
            <div className='postImg'>
                <IKImageComponent path="/pins/pin1.jpeg" alt ="" w={736}/>
            </div>
            <div className='postDetails'>
                <PostInteractions/>
                <Link to= "/john" className="postUser">
                  <IKImageComponent path="/general/noAvatar.png"/>
                    <span>John Doe</span></Link>
                    <Comments/>
            </div>
        </div>
    </div>
)
}


export default PostPage