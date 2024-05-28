import { useRef, useState } from "react"

const Page = () => {
  const [legentInput, setLegentInput] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSend = async () => {
    if (fileInputRef.current?.files && fileInputRef.current.files.length > 0) {
      const fileItem = fileInputRef.current.files[0];
      const allowed = ['image/jpg', 'image/jpeg', 'image/png'];

      if (allowed.includes(fileItem.type)) {
        const data = new FormData();
        data.append('image', fileItem);
        data.append('legend', legentInput);

        const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: {
            'Content-type': 'multipart/form-data'
          },
          body: data
        });

        const json = await res.json();
        console.log(json);

      }
      else {
        alert('arquivo incompátivel');
      }

    }
    else {
      alert('Selecione um arquivo');
    }
  }

  return (
    <>
      <div className="container mx-auto max-w-lg px-2">
        <h1 className="text-3xl mt-4">Upload de imagem</h1>
        <div className="max-w-md flex flex-col gap-3 border border-dotted border-white p-3 mt-4">
          <input type="file"
            ref={fileInputRef}
          />

          <input type="text"
            placeholder="Digite uma legenda"
            className="p-3 bg-white rounded-md text-black"
            value={legentInput}
            onChange={e => setLegentInput(e.target.value)}
          />

          <button onClick={handleFileSend}>Enviar mensagem</button>
        </div>
      </div>
    </>
  )
}

export default Page