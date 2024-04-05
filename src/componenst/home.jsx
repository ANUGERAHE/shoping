import { Baju } from '../gambar.js'
import Button from './button.jsx'
import Troli from './keranjang.jsx'
import { useRef,useState } from 'react'
import  Keranjang from '../assets/keranjang.png'

export default function Home({logout}){
    const pesan = useRef()
    const cari = useRef()

   
    const[masuk,setmasuk] = useState([])
    const[mencari,setcari] = useState(false)
    const[berhasil,setberhasil] = useState()

    function handlekeranjang(){
        pesan.current.showModal();
    }
    function handletambahpesan(text){
       setmasuk((pesan) => [...pesan,text]);
       if(text){
        alert(`${text} berhasil ditambah`)
       }
       else{
        alert('gagal di tambahkan')
       }
    }
    function handlehapuspesan(id){
        setmasuk((pesan) => pesan.filter((hapus) => hapus !== id))
    }
    
   
    
    
    // function cari baju 
    
    function handlecari(){
       for(let i = 0; i< Baju.length; i++){
        if(cari.current.value == Baju[i].title){
            setcari((cari) => cari = true)
            setberhasil((cari) => cari = Baju[i])
        }
        if(cari.current.value == ''){
            setcari((cari) => cari = false)
        }
        
       }
    }

//   console.log(mencari)


    return(
        <>
            <Troli ref={pesan} pesan={masuk} click={handlehapuspesan}/>
            <div className='flex flex-row w-full h-20 justify-center gap-8 items-center bg-amber-400 max-sm:w-full max-sm:justify-center max-sm:gap-3 max-sm:sticky max-sm:top-0'>
                <h1 className='font-bold text-3xl max-sm:text-lg max-sm:hidden'>Shopping</h1>
                <input type="text" placeholder='Search any t-shirt' className='p-2 w-1/2 border-solid border-2 rounded-3xl max-sm:w-2/3 max-sm:p-1 max-sm:text-sm' ref={cari} onKeyDown={handlecari}/>
                <button className="bg-sky-400  font-semibold w-20 rounded-3xl p-1 flex justify-center items-center max-sm:p-1 max-sm:h-8" onClick={handlekeranjang}><img src={Keranjang} alt="keranjang" className='bold w-4/12 max-sm:w-2/5' /></button>
                <button className="bg-sky-400  font-semibold w-20 rounded-3xl p-2 max-sm:w-1/4 max-sm:p-1 max-sm:text-sm" onClick={logout}>Log out</button>
                
            </div>
                {mencari == false && <div className='grid grid-flow-col w-full justify-center gap-4 max-sm:grid-flow-row '>
                    {Baju.map((baju,index) => (
                    <div key={index} className= 'flex flex-col items-center border-solid border-black border-2 p-4 mt-8 h-96 justify-between w-60  max-sm:h-64'>
                        <img src={baju.image} alt={baju.alt} className='w-30 h-40 max-sm:h-20'/>
                        <h4 className='font-bold max-sm:text-sm'>{baju.title}</h4>
                        <p className='max-sm:text-sm max-sm:text-center'>{baju.deskripsi}</p>
                        <button className="bg-sky-400  font-semibold w-40 rounded-3xl p-2 max-sm:w-2/3 max-sm:p-1 max-sm:text-sm" onClick={() => handletambahpesan(baju.title)}>Tambah</button>
                    </div>
                ))}
                </div>}
                {mencari && <div className='flex flex-col items-center border-solid border-black border-2 p-4 mt-8 h-96 justify-evenly w-60 ml-2'>
                     <img src={berhasil.image} alt={berhasil.alt} className='w-30 h-40'/>
                        <h4 className='font-bold '>{berhasil.title}</h4>
                        <p>{berhasil.deskripsi}</p>
                        <Button name='Tambah' click={() => handletambahpesan(berhasil.title)}/>
                    
                 </div>}

                
        </>
        
                
    )
}