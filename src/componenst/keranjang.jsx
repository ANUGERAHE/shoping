import { forwardRef } from "react"
import Button from "./button";

const Troli = forwardRef(function Troli({pesan,click},ref){
    return(
        <>
        <dialog ref={ref} className="p-4 w-2/4 max-sm:w-5/6">
            <h1 className="font-bold text-2xl max-sm:text-base">PESANAN ANDA</h1>
            {pesan.map((nilai,index) => (
                <div key={index} className="border-solid rounded-sm border-black border-2 p-2 flex flex-row justify-between mt-4 items-center max-sm:justify-between">
                    <p className="max-sm:text-base">{nilai}</p>
                    <button className="border-2 border-solid rounded-lg w-1/12 bg-sky-400 p-1 max-sm:text-sm max-sm:w-1/4" onClick={() => click(nilai)}>Hapus</button>
                </div>
            ))}
            <form method="dialog" className="flex w-full flex-row justify-end">
                <button className="bg-sky-400  font-semibold w-40 rounded-3xl p-2 mt-2 max-sm:p-1 max-sm:w-1/3">Close</button>
            </form>
        </dialog>
        </>
    )}
    
) 
export default Troli;
    
