import { useMutation } from "@tanstack/react-query";
import { usePosts } from "./utils/queries";
import { BeatLoader } from "react-spinners";
import { addPost } from "./utils/api";

const Page = () => {
  const posts = usePosts();
  const addMutation = useMutation({
    mutationFn: addPost
  });

  const handleAddButton = () => {
    addMutation.mutate({
      title: 'Teste',
      body: 'Corpo de tes',
      userId: 7
    });
  }

  return (
    <>
      <div className="container mx-auto max-w-lg px-2">
        <h1 className="text-white text-3xl">Hello</h1>

        <div className="border border-white p-3 ny-3">
          <p>Adicionar Novo Post</p>

          <p>Status: { addMutation.status }</p>

          <button disabled={addMutation.isPending} className="border border-red-500 px-2" onClick={handleAddButton}>Adicionar</button>
        </div>

        {posts.isLoading &&
          <>
            <div className="flex items-center">
              <span className="mr-3">Carregando</span>
              <BeatLoader color="#36d7b7" size={12} />
            </div>
          </>
        }

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