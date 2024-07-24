import { useController, UseControllerProps } from "react-hook-form"
import { SignupForm } from "../types/SignupForm";

export const Input = (props: UseControllerProps<SignupForm>) => {
  const { field, fieldState } = useController(props);

  return (
    <div className="ny-3">
      <input
        {...field}
        placeholder={props.name}
        className={`border ${fieldState.invalid ? 'border-red-500' : 'border-white'} p-3 text-black my-1`}
      />
      {fieldState.invalid && <p></p>}
      {fieldState.error?.type === 'required' && <p className="text-red-500">Campo obrigatório...</p>}
      {fieldState.error?.type === 'minLength' && <p className="text-red-500">O nome deve ser maior que 2 caracteres...</p>}
      {fieldState.error?.type === 'maxLength' && <p className="text-red-500">O nome deve ser menor que 20 caracteres...</p>}
      {fieldState.error?.type === 'min' && <p className="text-red-500">Este item precisa ser no mínimo 18 anos</p>}
    </div>
  )
}