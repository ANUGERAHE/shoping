
export default function Button({click,name,...props}){
    return(
        <div className="flex flex-col gap-y-1">
        <button className="bg-sky-400  font-semibold w-40 rounded-3xl p-2" onClick={click}>{name}</button>
        </div>
    )
}