import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ImBooks } from "react-icons/im";
import { FaBars, FaXmark } from "react-icons/fa6";
import { AuthContext } from '../contexts/AuthProvider';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSticky, setIsSticky] = useState(false) 

    const {user} = useContext(AuthContext)
    // console.log(user)

    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(()=>{
        const handleScroll = ()=>{
            if(window.scrollY > 100){
                setIsSticky(true)
            }
            else{
                setIsSticky(false)
            }
        }
        
        return ()=>{
            window.addEventListener('scroll',handleScroll)
        }
    }, [])

    //navigation
    const navItems =[
        {link:'Home',path: '/'},
        {link:'About',path: '/about'},
        {link:'Shop',path: '/shop'},
        {link:'Sell your book',path: '/admin/dashboard'},
        {link:'Blog',path: '/blog'},
    ]
  return (
    <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
        <nav className={`py-4 lg:px-24 ${isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" : ""}`}>
            <div className='flex justify-between items-center text-base gap-8'>
                {/* logo */}
                <Link to='/' className='font-bold text-blue-700 text-2xl flex items-center gap-2 ml-4'>
                    <ImBooks className='inline-block'/>
                    Book
                </Link>

                {/* Nav items for lagre device */}
                <ul className='md:flex space-x-12 hidden '>
                    {
                        navItems.map(({link, path})=>
                            <Link key={path} to={path} 
                            className='block text-base text-black uppercase cursor-pointer hover:text-blue-500'>{link}</Link>
                        )
                    }
                </ul>
                <div className='space-x-12 hidden lg:flex items-center'>
                    {
                        user? user.email :""
                    }
                    <button><FaBars className='w-5 ml-2 hover:text-blue-700'/></button>
                </div>

                {/* menu btn for mobile devices */}
                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='focus:outline-none'>
                        {
                            isMenuOpen ? <FaXmark className='h-5 w-5 text-black mr-4'/> : <FaBars className='h-5 w-5 text-black  mr-4'/>
                        }
                    </button>
                </div>
            </div>
            {/* navItems for small devidces */}
            <div className= {`space-y-4 px-4 mt-16 py-7 bg-red-600 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                {
                    navItems.map(({link, path})=>
                        <Link key={path} to={path} 
                            className='block text-base text-black uppercase cursor-pointer hover:text-white'>{link}
                        </Link>)
                }
            </div>
        </nav>
    </header>
  )
}

export default Navbar