import Button from "./button"
import { useRef,useState,forwardRef } from "react"
import { Gambar } from '../gambar.js'

const Login = forwardRef(function Login({welcome,jadi,Buat},ref){
    // const[finish,setfinish] = useState()
    const[daftar,setdaftar] = useState(false)

    // const name = useRef()
    // const password = useRef()
    // function masuk (){
    //     setfinish((nilai) => nilai = name.current.value)
    //     // setdaftar((nilai) => nilai = password.current.value)
    // }
    // function kedua (){
    //     setfinish((nilai) => name.current.value)
    //     // setdaftar((nilai) => password.current.value)
    // }
    function handleregis (){
        setdaftar((regis) => !regis)
    }
    function handleback (){
        setdaftar((nilai) => !nilai)
    }

    let border = "border-black border-solid border-2 p-2 w-80"
    // let border_pass = "border-black border-solid border-2 p-2 w-80"

    // if(finish === '' || password === ''){
    //     border = "border-red-400 border-solid border-2 p-2 w-80"
    //     // border_pass = "border-red-400 border-solid border-2 p-2 w-80"
    // }
    

    return (
        <div className="flex flex-row justify-evenly items-center w-screen h-screen">
            <img src={Gambar.imgate} alt="gambar animasi" className="h-80 w-80"/>
            <div className="flex flex-col gap-y-2 items-center">
                <h1 className="gap-y-6 text-3xl">{daftar == false ? 'LOGIN' : 'REGISTER'}</h1>
                <input type="text"  required placeholder="USERNAME" className={border}/>
                <input type="password" ref={ref} required placeholder="PASSWORD"className={border}/>
                {daftar && <input type="text" placeholder="FULL NAME" className={border}/>}
                {daftar && <input type="email"placeholder="EMAIL" className={border}/>}
                {daftar == false && <Button name="Login" click={jadi}/>}
                {daftar == false ? <Button name="Register" click={handleregis}/> : <Button name='Daftar' click={Buat}/>}
                {daftar && <Button name='kembali' click={handleback}/>}

            <h1>{welcome}</h1>
            </div>
        </div>
    )
})

export default Login;