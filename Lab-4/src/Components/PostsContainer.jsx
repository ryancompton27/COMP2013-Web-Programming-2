import PostCard from "./PostCard";

export default function PostsContainer({posts}) {
    const sortedPosts = posts.sort((a, b) => b.id - a.id);

    return (
        <div className="postsContainer">
            {sortedPosts.map((post) => (
                <PostCard key={post.id} title={post.title} body={post.body} />
            ))}
        </div>
    );
}