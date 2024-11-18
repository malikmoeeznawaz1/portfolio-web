import logo from '../assets/kevinRushLogo.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className="mb-10 flex items-center justify-between py-4 ">
        <div className="flex flex-shrink-0 items-center">
            <img className='mx-2 w-10' src={logo} alt="" />
        </div>
        <div className='flex items-center justify-center gap-4 mr-8 text-2xl'>
            <a href="https://www.linkedin.com/in/malik-moeez-nawaz/" target='_blank_'><FaLinkedin/></a>
            <a href="https://github.com/malikmoeeznawaz1" target='_blank_'><FaGithub/></a>
            <a href="https://www.instagram.com/malikmoeeznawaz/" target='_blank_'><FaInstagram/></a>             
        </div>
    </nav>
  )
}

export default Navbar