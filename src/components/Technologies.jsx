import { RiReactjsLine } from "react-icons/ri"
import { FaNodeJs } from "react-icons/fa"
import { SiMongodb } from "react-icons/si"
import { SiExpress } from "react-icons/si"

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h1 className="my-[4rem] text-center text-4xl">Technologies</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-4xl text-green-500"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiExpress className="text-4xl text-orange-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-4xl text-cyan-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-4xl text-green-500"/>
            </div>
            
            
        </div>
    </div>
  )
}

export default Technologies