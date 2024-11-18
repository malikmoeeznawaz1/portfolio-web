import { RiReactjsLine } from "react-icons/ri"
import { FaNodeJs } from "react-icons/fa"
import { SiMongodb } from "react-icons/si"
import { SiExpress } from "react-icons/si"
import {motion} from 'framer-motion'

const iconVaraints = (duration) => ({
    initial: {y: -10},
    animate:{
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2
        whileInView={{opacity:1, y:0}}
        initial={{y:-100, opacity:0 }}
        transition={{duration: 1}}
        className="my-[4rem] text-center text-4xl">Technologies</motion.h2>
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial= {{x:-100, opacity:0}}
        transition= {{duration: 1.5}}        
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div variants={iconVaraints(1.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-4xl text-green-500"/>
            </motion.div>
            <motion.div variants={iconVaraints(2)}
                initial="initial"
                animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiExpress className="text-4xl text-orange-400"/>
            </motion.div>
            <motion.div variants={iconVaraints(2.5)}
                initial="initial"
                animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-4xl text-cyan-400"/>
            </motion.div>
            <motion.div variants={iconVaraints(3)}
                initial="initial"
                animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-4xl text-green-500"/>
            </motion.div>           
        </motion.div>
    </div>
  )
}

export default Technologies