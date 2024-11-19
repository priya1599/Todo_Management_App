import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { Link } from 'react-router-dom'
function Projects() {
    const data = useLoaderData()
    const projectData = data.data

  

  return (
    <div className='mx-auto m-auto bg-white grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-10 px-4'>

      {
        projectData.map((item)=>(
        <div className='mt-5 mx-8'>
          <div 
        key={item.id}
        className='bg-white  justify-center items-center  h-32 border-[1px] rounded-md border-gray-300 py-6 z-30 hover:border-transparent shadow-none hover:shadow-testShadow duration-200 relative flex flex-col gap-4'>
<div className='px-4 bg-white flex flex-col gap-1 z-10'>
<h2 className=' tracking-wide font-serif text-center text-2xl text-[#131921] font-bold'>
  {item.title}</h2>
  <p className="text-gray-500 text-sm">CreatedDate: {item.createdDate}</p>
  </div>
  <Link to={`/ProjectDetails/${item._id}` }><button className='font-serif text-md font-medium  text-blue-600 w-auto p-1.5 rounded-full hover:text-black'>
    View 
  </button></Link>
         </div>
        </div>
        ))}
    </div>
  )
}

export default Projects
