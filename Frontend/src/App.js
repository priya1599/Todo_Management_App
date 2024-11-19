import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import  { projectData }  from './api/api';
import Home from './pages/home';
import ProjectDetails from './pages/ProjectDetails';
import Login from './pages/Login';
import CreateProject from './components/CreateProject';
function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={<Home/>} loader={projectData}></Route>
      <Route path='/ProjectDetails/:id' element={<ProjectDetails/>} loader={projectData}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path="/create-project" element={<CreateProject />} />

    </Route>
  ))
  return (
    <RouterProvider router={router}></RouterProvider>
);
  ;
}

export default App;
