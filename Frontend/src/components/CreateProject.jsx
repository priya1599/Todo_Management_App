import React from "react";


const CreateProject = () => {


  return (
    <div className="max-w-md mx-auto p-8 mt-24 bg-white shadow rounded border-4">
      <h2 className="text-2xl font-bold mb-4">Create New Project</h2>
      
      <form>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 mb-2">
            Project Title
          </label>
          <input
            type="text"
            id="title"
           
            
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 mb-2">
            Project Description
          </label>
          <textarea
            id="description"
            
            
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-400 text-black py-2 rounded"
        >
          Create Project
        </button>
      </form>
    </div>
  );
};

export default CreateProject;



