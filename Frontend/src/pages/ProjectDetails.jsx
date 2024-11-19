
import React from 'react';
import { useLoaderData } from 'react-router-dom'

function TodoItem () {
  const data = useLoaderData()
  const projectData = data.data
  return (
  <div>
     {
       projectData.map((item)=>(
    <li className="border p-2 mb-2">
      <h2>{item.title}</h2>
      <p>{item.description}</p>
     
      <span className={`text-sm ${item.status === 'complete' ? 'text-green-500' : 'text-red-500'}`}>
        {item.status === 'complete' ? 'Complete' : 'Pending'}
      </span>
    </li>
     ))}
  </div> 
  );
};

export default TodoItem;

