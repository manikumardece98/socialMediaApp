import { useContext } from "react";
import { Link, useParams } from "react-router-dom"
import DataContext from "./context/DataContext";

const PostPage = () => {

  const { posts, handleDelete} = useContext(DataContext)
    const { id } = useParams();
    const post = posts.find(post => {
      if((post.id).toString() === id) {
        return post;
      }
    }); 
   
    

return(
  
  <main className="PostPage">
    <article className="Post">
          {post &&
          <>
               <h2>{post.title}</h2>
               <p className="postDate">{post.datetime}</p>
               <p className="postBody">{post.body}</p>
               <Link to={`/edit/${post.id}`}><button className="editButton">Edit Post</button></Link>
               <button className="deleteButton" onClick={() => handleDelete(post.id)}>Delete Post</button>
               <Link to= "/"><button className="editButton">Back</button></Link> 
          </>
          }
          {!post &&
               <>
                    <h2>Post Not Found</h2>
                    <p>Well, that's disappointing</p>
                    <Link to='/'>Visit Our Homepage</Link>
               </>}
    </article>
  </main>
)
  }
export default PostPage