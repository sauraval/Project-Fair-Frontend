import React from 'react'
import ProjectCard from '../Components/ProjectCard'


function Projects() {
  return (
    <div>
      <h2 className='text-center m-4' >All Projects</h2>
      <input type="text" style={{width:'400px',marginLeft:'600px'}} placeholder='Search By Technology' className='form-control m-5 mx-auto ' />
      <div className="row">
        <div className="col">
          <ProjectCard/>
        </div>
      </div>
    </div>

  )
}

export default Projects