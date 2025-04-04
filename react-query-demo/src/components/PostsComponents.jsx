import { useQuery } from '@tanstack/react-query';

const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
        throw new Error('Failed to fetch post');
    }
    return response.json();
};
const PostsComponents = () => {
    const { data, isLoading, isError, error, refetch } = useQuery({
        queryKey: ['posts'],
        queryFn: fetchPosts,
        cacheTime: 1000 * 60 * 5,
        staleTime: 1000 * 60 * 1,
        refetchOnWindowFocus: false,
        keepPreviousData: true,
    });
    if (isLoading) return <p>Loading posts...</p>
    if (isError) return <p>Error: {error.message}</p>
    return (
        <div>
            <h2>Posts</h2>
            <h2></h2>
            <button onClick={() => refetch()} style={{ marginBottom: '10px' }}>Refresh Post</button>
             <ul>
                {data.map((post) => (
                    <li key={post.id}>{post.title}</li>
                    
                ))}
            </ul>
        </div>
    )

}
export default PostsComponents