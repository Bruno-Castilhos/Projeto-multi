import { useState } from "react";
import  App  from "../Charts/Chart3"

export function Modal3({id = 'Modal', onClose = () => {}}) {

  const handleOutsideClick = (e: any) => {
    if (e.target.id === id) onClose()
  }

  return (
    <div id={id} onClick={handleOutsideClick} className="fixed inset-0 backdrop-blur flex justify-center items-center ">
      <div className=" bg-zinc-800 w-[784px] h-[584px] flex flex-col rounded-3xl shadow-lg shadow-brand">
        <header className="flex justify-between items-center px-8 py-4">
          <div className='text-[30px]'>Relação entre a nota média da turma e do aluno para uma habilidade</div>
          <button onClick={onClose}>X</button>
        </header>
        <div className="flex justify-center items-center">
          <App />
        </div>
      </div>
    </div>
  )
}
