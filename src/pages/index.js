// src/pages/index.js
import PostList from '../components/PostList';

export default function Home({ posts }) {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Forum Posts</h1>
      <PostList posts={posts} />
    </div>
  );
}

// Fetching the posts statically at build time
export async function getStaticProps() {
  // Mock Data (Replace this with an actual API call if needed)
  const posts = [
    { id: 1, title: 'First Post', body: 'This is the first post.' },
    { id: 2, title: 'Second Post', body: 'This is the second post.' },
    { id: 3, title: 'Third Post', body: 'This is the third post.' },
  ];

  return {
    props: {
      posts,
    },
  };
}
