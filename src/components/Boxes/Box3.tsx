import { useState } from "react";
import { Modal3 } from "../Modals/Modal3";

export function Box3() {

  const [handleModal, setHandleModal] = useState(false)


  return (
    <>
    <button onClick={() => setHandleModal(true)} className="flex flex-col justify-evenly items-center bg-zinc-800 p-2.5 w-64 h-52 rounded-3xl shadow-lg shadow-brand">
      <h2>
        Relatório 3
      </h2>
      <span>
        Relatório de Barra
      </span>
    </button>
    {handleModal && <Modal3 onClose={() => setHandleModal(false)}/>}
  </>
  )
}