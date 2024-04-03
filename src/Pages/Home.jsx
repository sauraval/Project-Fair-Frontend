import React from 'react'
import { Link } from 'react-router-dom'
import programmer from '../assets/programmer.webp'
import ProjectCard from '../Components/ProjectCard'
import Auth from './Auth'

function Home() {
  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <h1 className='text-center mt-5'>Project Fair</h1>
          <p style={{ textAlign: 'justify' }} className='mx-5 mt-3'>Projects can range from small personal endeavors to large-scale professional initiatives. They often require careful planning, execution, and evaluation to ensure successful completion. Whether it’s a school project, work project, or a fun DIY project at home, the term “project” is commonly used to describe a wide variety of tasks and activities.</p>
          <div className='text-center'>
            <Link to={'login'}>
              <button href="/login" className='btn btn-dark mt-2 mb-5'>Get Started</button>
            </Link>          
            </div>
        </div>
        <div className="col-md-6">
          <img src={programmer} width={'100%'} alt="" />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h1 className='text-center m-5'>Explore Our Project</h1>
          <marquee behavior="" width='100%' height='400px' direction="left">
            <div>
              <ProjectCard/>
            </div>
          </marquee>
        </div>
      </div>
      <div className="row">
    <h1 className='text-center m-5'>Our Services</h1>
        <div className="col-md-4">
          <div className="card shadow  p-5" style={{height:'550px'}}>
            <h3 className='text-center m-2'>Web Designing</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aliquid minima numquam maxime in enim architecto blanditiis dignissimos voluptas exercitationem suscipit, a esse soluta, aspernatur neque, fugiat dolorem porro earum.
            Accusamus cum iste veniam unde alias incidunt illum a earum itaque perferendis iusto quasi, atque officiis necessitatibus architecto officia adipisci mollitia. Voluptate dolorem, placeat repudiandae aut molestiae esse assumenda reprehenderit!</p>
          </div>
        </div>
        <div className="col-md-4">
        <div className="card shadow  p-5" style={{height:'550px'}}>
            <h3 className='text-center m-2'>Single Page Application</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aliquid minima numquam maxime in enim architecto blanditiis dignissimos voluptas exercitationem suscipit, a esse soluta, aspernatur neque, fugiat dolorem porro earum.
            Accusamus cum iste veniam unde alias incidunt illum a earum itaque perferendis iusto quasi, atque officiis necessitatibus architecto officia adipisci mollitia. Voluptate dolorem, placeat repudiandae aut molestiae esse assumenda reprehenderit!</p>
          </div>
        </div>
        <div className="col-md-4">
        <div className="card shadow  p-5" style={{height:'550px'}}>
            <h3 className='text-center m-2'>Backend Services</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aliquid minima numquam maxime in enim architecto blanditiis dignissimos voluptas exercitationem suscipit, a esse soluta, aspernatur neque, fugiat dolorem porro earum.
            Accusamus cum iste veniam unde alias incidunt illum a earum itaque perferendis iusto quasi, atque officiis necessitatibus architecto officia adipisci mollitia. Voluptate dolorem, placeat repudiandae aut molestiae esse assumenda reprehenderit!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home