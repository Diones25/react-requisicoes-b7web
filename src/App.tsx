import { SubmitHandler, useForm } from "react-hook-form"
import { SignupForm } from "./types/SignupForm";
import { Input } from "./components/Input";

const Page = () => {
  const {
    control,
    handleSubmit
  } = useForm<SignupForm>();

  const handleFormSubmit: SubmitHandler<SignupForm> = (data) => {
    console.log(data)
  }

  return (
    <>
      <div className="container mx-auto max-w-lg px-2">
        
        <form onSubmit={handleSubmit(handleFormSubmit)} className="mt-3">

          <Input
            control={control}
            name="name"
            rules={{ required: true, minLength: 2, maxLength: 20 }}
          />

          <Input
            control={control}
            name="lastName"            
          />

          <Input
            control={control}
            name="age"
            rules={{ required: true, min: 18 }}
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