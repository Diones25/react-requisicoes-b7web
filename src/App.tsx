import { useQuery } from "@tanstack/react-query"
import axios from "axios";
import { Post } from "./types/Post";

const Page = () => {
  const query = useQuery({
    queryKey: ['posts'],
    queryFn: async (): Promise<Post[]> => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      return response.data;
    }
  });
  

  return (
    <>
      <div className="container mx-auto max-w-lg px-2">
        <h1 className="text-white text-3xl">Hello</h1>

        {query.isLoading && 'Carregando...'}

        {query.data &&
          <ul>
            {query.data.map(item => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        }
      </div>
    </>
  )
}

export default Page