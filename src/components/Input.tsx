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
    </div>
  )
}