import React from 'react'
import { Footer } from 'flowbite-react';
import {BsFacebook, BsGithub, BsTwitter, BsLinkedin } from 'react-icons/bs';
import logo from "../assets/logo.png"
import {Link} from 'react-router-dom'

const MyFooter = () => {
  return (
    <div>
            <Footer bgDark>
      <div className="w-full">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-3">
          <div className='ml-10'>
            <img src={logo} alt="" className='w-12 mb-3' />
            <p className='text-white'>
              Start your reading journey
            </p>
            <Link to="/shop"><button className='bg-blue-700 text-white font-semibold mt-3 px-5 py-2 rounded 
                hover:bg-black transition-all duration-300'>Read now</button></Link>
          </div>
          <div>
            <Footer.Title title="help center" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Discord Server</Footer.Link>
              <Footer.Link href="#">Twitter</Footer.Link>
              <Footer.Link href="#">Facebook</Footer.Link>
              <Footer.Link href="#">Contact Us</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="legal" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Tran Quoc Thang" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="https://www.facebook.com/profile.php?id=100026984111606" target='_blank' icon={BsFacebook} />
            <Footer.Icon href="https://www.linkedin.com/in/quocthang188/"  target='_blank' icon={BsLinkedin} />
            <Footer.Icon href="https://twitter.com/thangtranvt18" target='_blank' icon={BsTwitter} />
            <Footer.Icon href="https://github.com/quocthang188?tab=repositories" target='_blank' icon={BsGithub} />
          </div>
        </div>
      </div>
    </Footer>
    </div>
  )
}

export default MyFooter