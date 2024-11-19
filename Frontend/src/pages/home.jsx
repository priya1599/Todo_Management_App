import React from 'react'
import Projects from '../components/Projects'
import Nvabar from '../components/Nvabar'
import { Link } from 'react-router-dom'
function home() {
  return (
    <div>
        <Nvabar/>
        <div>
<Link to={"/create-project"}>
<button
              
              className=" bg-green-400 mt-4 ml-4 text-black py-2 px-4 rounded-full mb-4 hover:bg-green-600"
            >
              Create New Project
            </button>

</Link>
</div>
     <Projects/>
     
    </div>
  )
}

export default home
