import { useMutation } from "@tanstack/react-query";
import { usePosts } from "./utils/queries";
import { BeatLoader } from "react-spinners";
import { addPost } from "./utils/api";

const Page = () => {
  const posts = usePosts();
  const addMutation = useMutation({
    mutationFn: addPost,
    onMutate: (data) => {
      console.log("Dados da mutaion ", data)
    },
    onError: (error, data, context) => {
      console.log(error);
    },
    onSuccess: (retorno, data, context) => {
      console.log("Retorno no onSuccess ", retorno)
    },
    onSettled: (retorno, error, data, context) => { //roda por ultimo independente de dar erro ou não
      console.log("Retorno no OnSettled ", retorno);
      console.log("Erro no OnSettled ", error);
    }
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