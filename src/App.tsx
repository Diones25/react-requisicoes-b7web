import { useState } from "react";
import { usePosts } from "./utils/queries";
import { BeatLoader, ClipLoader, ScaleLoader } from "react-spinners";

const Page = () => {
  const limit = 3;
  const [page, setPage] = useState(0);

  const posts = usePosts(limit, page * limit);

  const handlePrevButton = () => {
    setPage(page === 0 ? 0 : page - 1)
  }

  const handleNextButton = () => {
    setPage(page + 1)
  }

  return (
    <>
      <div className="container mx-auto max-w-lg px-2">
        <h1 className="text-white text-3xl">Hello</h1>

        <div className="border border-white p-3 m-3">
          <div>Itens por página: {limit}</div>
          <div>Número da página: {page}</div>
          <button disabled={page === 0} onClick={handlePrevButton} className="border mx-2 px-2 bg-blue-500">Página Anterior</button>
          <button onClick={handleNextButton} className="border mx-2 px-2 bg-blue-500">Próxima Página</button>
        </div>

        {posts.isLoading &&
          <>
            <div className="flex items-center">
              <span className="mr-3">Carregando</span>
              <BeatLoader color="#36d7b7" size={12} />
            </div>
          </>
        }
        {!posts.isLoading && posts.isFetching && 
          <>
            <div className="flex items-center">
              <span className="mr-3">Recarregando</span>
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