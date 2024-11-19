const Project = require('../models/projectModel');

exports.createProject = async (req, res) => {
  const { title } = req.body;
  try {
    const newProject = new Project({ title });
    await newProject.save();
    res.status(201).send({message : "Project created successfully"});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateProject = async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  try {
    const project = await Project.findByIdAndUpdate(id, { title }, { new: true });
    res.status(200).json(project);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteProject = async (req, res) => {
  const { id } = req.params;
  try {
    await Project.findByIdAndDelete(id);
    res.status(200).send({ message: 'Project deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

// Add a todo to a project
exports.addTodo = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found' });

    const newTodo = { description: req.body.description, status: 'pending' };
    project.todos.push(newTodo);
    await project.save();
    res.status(201).send({message : "Todo created successfully"});
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

// Mark todo as complete/pending
exports.updateTodoStatus = async (req, res) => {
  try {
    const project = await Project.findById(req.params.projectId);
    if (!project) return res.status(404).json({ message: 'Project not found' });

    const todo = project.todos.id(req.params.todoId);
    if (!todo) return res.status(404).json({ message: 'Todo not found' });

    todo.status = req.body.status || 'pending';
    todo.updatedDate = Date.now();

    await project.save();
    res.status(200).send({message: 'Updates todo successfully'});
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

exports.deleteTodo = async (req, res) => {
  const { projectId, todoId } = req.params;
  try {
    const project = await Project.findById(projectId);
    project.todos.id(todoId);
    await project.save();
    res.status(200).send({ message: 'Todo deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


