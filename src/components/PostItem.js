// src/components/PostItem.js
const PostItem = ({ post }) => {
    return (
      <div className="p-4 border rounded-md shadow-md bg-white">
        <h2 className="text-xl font-bold mb-2">{post.title}</h2>
        <p className="text-gray-700">{post.body}</p>
      </div>
    );
  };
  
  export default PostItem;
  