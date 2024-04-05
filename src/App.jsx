import Login from './componenst/login.jsx'
import Home from './componenst/home.jsx'
import {useRef,useState} from 'react'

// let ssetpass = password.push(password.current.value)

function App() {
  

  const[dasboard,setdasboard] = useState(true)
  let array = []
  const password = useRef()

  function handlecreate (){
    array.push(password.current.value)
    alert('daftar selesai !!!')
  }
function handlelogin(){
  for(let i = 0; i < array.length; i++){
    if(password.current.value == array[i]){
      setdasboard((nilai) => !nilai)
      alert('berhasil')
    }
    else if(password.current.value != array[i]){
      alert('Tidak terdaftar')
    }
  }
  
}
function handlelogout(){
  setdasboard((nilai) => false)
}


  // let tailwind = "flex flex-col justify-center items-center gap-y-2 w-full border-solid border-2 border-black h-screen"

  // if(dasboard){
  //   tailwind = "flex "
  // }



  return (
    <>
    {dasboard ? <Home logout={handlelogout}/> : <Login welcome='SELAMAT DATANG' ref={password} jadi={handlelogin} Buat={handlecreate}/>}
    </>
  )
}

export default App
