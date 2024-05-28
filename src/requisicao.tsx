import { useEffect, useState } from "react"
import { User } from "./types/User";

const Page = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    (async () => {      
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const json = await res.json();
        setUsers(json);
      } catch (error) {
        console.log("Error: ", error)
      }
      setLoading(false)
    })()
  }, []);

  return (
    <>
      <div className="container mx-auto max-w-lg px-2">
        <h1>Lista de usuários</h1>

        {loading && "Carregando..."}

        {!loading && users.length > 0 &&
          <ul>
            {users.map(item => (
              <li key={item.id}>
                {item.name} ({item.address.city})
              </li>
            ))}
          </ul>        
        }

        {!loading && users.length === 0 && "Não há usuários para exibir"}
      </div>
    </>
  )
}

export default Page