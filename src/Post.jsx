import './Post.css'

export default function Post({post}){
    const {title, body, id, userId} = post
    return (
        <div className='post'>
            <h5>Title: {title}</h5>
            <p><small>User ID: {userId}</small></p>
            <p><small>Post ID: {id}</small></p>
            <p>{body}</p>
        </div>
    )
}