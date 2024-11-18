import {PROJECTS} from '../constants'

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">Projects</h2>
        <div>
            {
                PROJECTS.map((project, index) => (
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center gap-16'>
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
                    </div>
                ))
            }
            
        </div>
    </div>
  )
}

export default Projects