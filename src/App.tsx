import { SubmitHandler, useForm } from "react-hook-form"

type Inputs = {
  name: string;
  lastName: string;
  age: number;
}

const Page = () => {
  const { handleSubmit, register } = useForm<Inputs>();

  const handleFormSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
  }

  return (
    <>
      <div className="container mx-auto max-w-lg px-2">
        
        <form onSubmit={handleSubmit(handleFormSubmit)} className="mt-3">
          <input
            type="text"
            {...register('name', { required: true, minLength: 2, maxLength: 20 })}
            placeholder="Digite seu nome"
            className="border border-white p-3 text-black"
          />

          <input
            type="text"
            {...register('lastName')}
            placeholder="Digite seu sobrenome"
            className="block mt-3 border border-white p-3 text-black"
          />

          <input
            type="number"
            {...register('age', { required: true, min: 18 })}
            placeholder="Digite sua idade"
            className="block mt-3 border border-white p-3 text-black"
          />

          <input
            type="submit"
            value="Enviar"
            className="bg-blue-400 px-4 py-1 mt-3 rounded-sm cursor-pointer"
          />

        </form>

      </div>
    </>
  )
}

export default Page