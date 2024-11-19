import axios from "axios";

export async function projectData(){
    const project = await axios.get(
        "http://localhost:8080/api/project/details");
        // "https://todo-backend1-xuw8.onrender.com/api/project/details");
    return project
}

