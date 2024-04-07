import Button from "./button"
import { useRef,useState,forwardRef } from "react"
import { Gambar } from '../gambar.js'

const Login = forwardRef(function Login({welcome,jadi,Buat},ref){
    // const[finish,setfinish] = useState()
    const[daftar,setdaftar] = useState(false)
    const email = useRef()

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
        email.current.value = ''
    }

    let border = "border-black border-solid border-2 p-2 w-80 max-sm:3/4 2xl:w-3/5 sm:3/4"
    // let border_pass = "border-black border-solid border-2 p-2 w-80"

    // if(finish === '' || password === ''){
    //     border = "border-red-400 border-solid border-2 p-2 w-80"
    //     // border_pass = "border-red-400 border-solid border-2 p-2 w-80"
    // }
    

    return (
        <div className="flex flex-row justify-evenly items-center w-screen h-screen max-sm:w-screen max-sm:h-screen">
            <img src={Gambar.imgate} alt="gambar animasi" className="h-80 w-80 max-sm:hidden sm:hidden lg:inline md:inline 2xl:w-6/12 2xl:h-2/5" loading="lazy"/>
            <div className="flex flex-col gap-y-2 items-center 2xl:w-2/4 border-2 max-sm:w-screen">
                <h1 className="gap-y-6 text-3xl max-sm:text-5xl w-">{daftar == false ? 'LOGIN' : 'REGISTER'}</h1>
                <input type="text"  required placeholder="USERNAME" className="border-black border-solid border-2 p-2 w-80 max-sm:w-74 2xl:w-3/5" ref={email}/>
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