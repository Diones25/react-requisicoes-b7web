import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getPost, getPosts } from "./api";

// export const usePosts = (limit: number, start: number) => {
//   const query = useQuery({
//     queryKey: ['posts', { limit, start }],
//     queryFn: () => getPosts(limit, start),
//     placeholderData: keepPreviousData
//   });

//   return query;
// }

export const usePosts = () => {
  const query = useQuery({
    queryKey: ['posts'],
    queryFn: () => getPosts(),
    placeholderData: keepPreviousData
  });

  return query;
}

export const usePost = (id: number) => {
  const query = useQuery({
    queryKey: ['posts', id],
    queryFn: () => getPost(id)
  });

  return query;
}