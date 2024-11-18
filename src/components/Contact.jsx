import {CONTACT} from '../constants'
import { FaLocationDot } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <h2 className="my-10 text-center text-4xl">Contact</h2>
        <div className="tracking-tighter">
            <div className="flex flex-col items-center">
                <div className="flex flex-col items-start">
                    <div className="flex justify-center gap-4 my-2">
                        <FaLocationDot className='my-0.5'/>
                        <p className="text-neutral-400">{CONTACT.address}</p>
                    </div>
                    <div className="flex justify-center gap-4 my-2">
                        <FaWhatsappSquare  className='my-0.5'/>
                        <a href="https://wa.link/hdjdu4"><p className="text-neutral-400">{CONTACT.phoneNo}</p></a>
                    </div>
                    <div className="flex justify-center gap-4">
                        <MdEmail  className='my-0.5'/>
                        <a href="https://mailto:malikmoeez508@gmail.com"><p className="text-neutral-400">{CONTACT.email}</p></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact