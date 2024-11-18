import {PROJECTS} from '../constants'
import {motion} from 'framer-motion'

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h2 
        whileInView={{opacity:1, y:0}}
        initial={{y:-100, opacity:0 }}
        transition={{duration: 1}}
        className="my-20 text-center text-4xl">Projects</motion.h2>
        <div>
            {
                PROJECTS.map((project, index) => (
                        <motion.div whileInView={{opacity:1, y:0}}
                        initial={{y:-100, opacity:0 }}
                        transition={{duration: 1}} key={index} className='mb-8 flex flex-wrap lg:justify-center gap-16'>
                            <div className="w-full lg:w-1/4">
                                <img className='w-[27rem] rounded-md' src={project.image} alt={project.title} />
                            </div>
                            <div className="w-full max-w-xl lg:w-3/4">
                                <h6 className='justify-start text-purple-100'>{project.title}</h6>
                                <p className='text-neutral-400'>{project.description}</p>
                                {
                                project.technologies.map((tech, index) => (
                                    <span key={index} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500'>{tech}</span>
                                ))
                            }
                            </div>                            
                        </motion.div>
                ))
            }
            
        </div>
    </div>
  )
}

export default Projects