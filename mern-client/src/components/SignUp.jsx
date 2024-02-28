import React from 'react'
import logo from '../assets/logo.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider'
import { useState } from 'react'

const SignUp = () => {
    const {createUser, loginWithGoogle} = useContext(AuthContext)
    const [error, setError] = useState("error")

    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || "/"

    const handleSignUp = (event) =>{
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        
        createUser(email, password).then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("Sign up successfully!")
            navigate(from, {replace: true})
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage)
          })
    }

    //signup using google account
    const handleRegister = () =>{
        loginWithGoogle().then((result)=>{
            const user = result.user
            navigate(from, {replace:true})
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage)
          })
    }

  return (
    <div className='min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12'>
        <div className='relative py-3 sm:max-w-xl sm:mx-auto'>
                <form onSubmit={handleSignUp} className="h-max mx-auto flex flex-col items-center">
                    <img className="h-[40px] w-[47px] mb-5" src={logo} alt=""/>
                    <h1 className="text-xl font-bold text-center pb-2">Sign Up</h1>
                    <div className="bg-white shadow-xl p-10 flex flex-col gap-4 text-sm">
                        <div>
                            <label className="text-gray-600 font-bold inline-block pb-2">Email</label>
                            <input id='email' name='email' className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2" placeholder="mehedi@jaman.com"/>
                        </div>
                        <div>
                            <label className="text-gray-600 font-bold inline-block pb-2">Password</label>
                            <input id='password' name='password' className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2" type='password' placeholder="******"/>
                        </div>
                        <div className="flex">
                            <div className="w-1/2">
                                <input type="checkbox" name="remeberMe"/>
                                <label className='pl-1'>Remeber me</label>
                            </div>
                            <div className="w-1/2">
                                <a className="font-bold text-blue-600" href="">Forgot password ?</a>
                            </div>
                        </div>
                        <div>
                            <input className="bg-[#4F46E5] w-full py-2 rounded-md text-white font-bold cursor-pointer hover:bg-[#181196]" type="submit" value="Sign Up" />
                        </div>
                        <div>
                            <p className="text-center">Or continue with</p>
                        </div>
                        <div className="flex justify-center gap-4">
                            <button onClick={handleRegister} className="bg-red-500 w-1/2 py-1 rounded-md text-white font-bold cursor-pointer hover:bg-red-600">Google</button>
                            {/* <button class="bg-[#24292F] w-1/2 py-1 rounded-md text-white font-bold cursor-pointer hover:bg-[#181196]">Github</button> */}
                        </div>
                        <p>If you have an account. Click here to <Link to='/login' className='text-blue-700 underline'>Sign in</Link></p>
                    </div>
                </form>
        </div>
    </div>
  )
}

export default SignUp