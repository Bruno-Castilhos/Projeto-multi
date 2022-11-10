import { useState } from "react";
import { Modal1 } from "../Modals/Modal1";

export function Box1() {

  
  const [handleModal, setHandleModal] = useState(false)

  return (
  <>
    <button onClick={() => setHandleModal(true)} className="flex flex-col justify-evenly items-center bg-zinc-800 p-2.5 w-64 h-52 rounded-3xl shadow-lg shadow-brand">
      <h2>
        Relatório 1
      </h2>
      <span>
        Relatório de Pizza
      </span>
    </button>
    {handleModal && <Modal1 onClose={() => setHandleModal(false)}/>}
  </>
  )
}