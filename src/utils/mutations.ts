import { useMutation } from "@tanstack/react-query"
import { addPost } from "./api"

export const useAddPost = () => {
  const mutation = useMutation({
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
  })  

  return mutation;
}