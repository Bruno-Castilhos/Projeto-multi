import { App } from "../Charts/Chart1"

export function Modal1({id = 'Modal', onClose = () => {}}) {

  const handleOutsideClick = (e: any) => {
  if (e.target.id === id) onClose()
}

  return (
    <div id={id} onClick={handleOutsideClick} className="fixed inset-0 backdrop-blur flex justify-center items-center ">
      <div className=" bg-zinc-800 w-[784px] h-[584px] flex flex-col gap-12 rounded-3xl shadow-lg shadow-brand">
        <header className="flex justify-between items-center px-8 py-6">
          <div>Relatório de Pizza</div>
          <button onClick={onClose}>X</button>
        </header>
        <div className="flex justify-center items-center">
          <App />
        </div>
      </div>
    </div>
  )
}
