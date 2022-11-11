import { useState } from "react";
import { Modal2 } from "../Modals/Modal2";

export function Box2() {

  const [handleModal, setHandleModal] = useState(false)


  return (
    <>
    <button onClick={() => setHandleModal(true)} className="flex flex-col justify-evenly items-center bg-zinc-800 p-2.5 w-64 h-52 rounded-3xl shadow-lg shadow-brand hover:text-brand">
      <h2>
      Relação de notas total esperada e obtida de cada habilidade
      </h2>
    </button>
    {handleModal && <Modal2 onClose={() => setHandleModal(false)}/>}
  </>
  )
}