import {HERO_CONTENT} from '../constants/index.js'
import pPic from '../assets/p-pic.png'
import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-32">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 initial={{x:-100, opacity:0}}
                    animate={{x:0, opacity:1}}
                    transition={{duration:0.5, delay:.2}} className="pb-8 text-4xl font-thin tracking-tight lg:mt-12 lg:text-7xl">Malik Moeez Nawaz</motion.h1>
                    <motion.span initial={{x:-100, opacity:0}}
                    animate={{x:0, opacity:1}}
                    transition={{duration:0.5, delay:.35}} className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Pull Stack Developer</motion.span>
                   <motion.p initial={{x:-100, opacity:0}}
                    animate={{x:0, opacity:1}}
                    transition={{duration:0.5, delay:.6}} className='my-2 max-w-xl py-4 font-light tracking-tighter' >{HERO_CONTENT}</motion.p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-2">
                <div className="flex justify-center">
                    <motion.img initial={{x:100, opacity:0}}
                    animate={{x:0, opacity:1}}
                    transition={{duration:1, delay:.2}} className='w-72 border  border-zinc-800 rounded-lg' src={pPic} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero