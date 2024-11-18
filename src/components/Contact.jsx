import {CONTACT} from '../constants'
import { FaLocationDot } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {motion} from 'framer-motion'


const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <motion.h2 whileInView={{opacity:1, y:0}}
        initial={{y:-100, opacity:0 }}
        transition={{duration: 1}} className="my-10 text-center text-4xl">Contact</motion.h2>
        <div className="tracking-tighter">
            <div className="flex flex-col items-center">
                <div className="flex flex-col items-start">
                    <motion.div whileInView={{opacity:1, y:0}}
                        initial={{y:-100, opacity:0 }}
                        transition={{duration: 1}} className="flex justify-center gap-4 my-2">
                        <FaLocationDot className='my-0.5'/>
                        <p className="text-neutral-400">{CONTACT.address}</p>
                    </motion.div>
                    <motion.div whileInView={{opacity:1, y:0}}
                        initial={{y:-100, opacity:0 }}
                        transition={{duration: 1}} className="flex justify-center gap-4 my-2">
                        <FaWhatsappSquare  className='my-0.5'/>
                        <a href="https://wa.link/hdjdu4"><p className="text-neutral-400">{CONTACT.phoneNo}</p></a>
                    </motion.div>
                    <motion.div whileInView={{opacity:1, y:0}}
                        initial={{y:-100, opacity:0 }}
                        transition={{duration: 1}} className="flex justify-center gap-4">
                        <MdEmail  className='my-0.5'/>
                        <a href="https://mailto:malikmoeez508@gmail.com"><p className="text-neutral-400">{CONTACT.email}</p></a>
                    </motion.div>
                </div>
            </div>
        </div>  
    </div>
  )
}

export default Contact