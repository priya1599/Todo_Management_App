const express = require('express');
const {createProject, getAllProjects, updateProject, deleteProject, getProjectById, addTodo,updateTodoStatus, deleteTodo} = require("../controllers/projectController") 

const  projectRouter = express.Router();

projectRouter.post("/create", createProject);
projectRouter.patch("/:id", updateProject);//Update product by id Route
projectRouter.delete("/:id", deleteProject);
projectRouter.get("/details", getAllProjects);
projectRouter.get("/:id", getProjectById);

projectRouter.post('/:id/todos', addTodo);
projectRouter.put('/:projectId/todos/:todoId', updateTodoStatus);
projectRouter.delete('/:projectId/:todoId', deleteTodo);

module.exports = projectRouter;



