// src/components/PostList.js
import PostItem from './PostItem';

const PostList = ({ posts }) => {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
