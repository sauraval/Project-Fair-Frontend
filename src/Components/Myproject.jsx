import React from 'react'
import AddProject from './AddProject'
import { IoLogoGithub } from "react-icons/io5";
import { FaLink } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";



function Myproject() {
  return (
    <div>
      <div className='d-flex justify-content-between '>
        <h3 className='ms-5'>My Projects</h3>
        <AddProject/>
      </div>
      <div className="row shadow m-4 p-5">
        <div className="col-6">
          <h4>Project Title</h4>
        </div>
        <div className="col-6 d-flex justify-content-evenly">
          <button className='btn'><IoLogoGithub />
          </button>
          <button className='btn'><FaLink />
          </button>
          <button className='btn'>
          <RiDeleteBin5Line />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Myproject