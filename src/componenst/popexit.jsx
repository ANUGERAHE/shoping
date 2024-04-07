import { useRef,useState,forwardRef } from "react"


const Popexit = forwardRef(function Popexit({exit},ref){
    return (
        <>
        <dialog ref={ref} className="p-4 w-1/2 max-sm:w-4/5">
            <h1 className="bold uppercase font-bold text-2xl max-sm:text-sm">apakah anda yakin ingin keluar ?</h1>
            <div className="flex flex-row justify-evenly mt-8">
            <button className="bg-sky-400 p-2 w-1/4 rounded-3xl" onClick={exit}>Ya</button>
            <form method="dialog" className="w-1/3  flex justify-center">
                <button className="bg-sky-400 p-2 w-4/5 rounded-3xl">close</button>
            </form>

            </div>
        </dialog>
        </>
    )
})

export default Popexit;