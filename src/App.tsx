import { usePost, usePosts } from "./utils/queries";

const Page = () => {
  const posts = usePosts();
  
  const post = usePost(10);

  return (
    <>
      <div className="container mx-auto max-w-lg px-2">
        <h1 className="text-white text-3xl">Hello</h1>

        {posts.isLoading && 'Carregando...'}

        {posts.data &&
          <ul>
            {posts.data.map(item => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        }
      </div>
    </>
  )
}

export default Page