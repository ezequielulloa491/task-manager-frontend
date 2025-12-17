import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const API_URL = "https://task-manager-backend-yvwq.onrender.com";

function App() {
  const [tasks, setTasks] = useState([]);

  // Obtener tareas del backend
  const fetchTasks = async () => {
    const res = await fetch(`${API_URL}/tasks`);
    const data = await res.json();
    setTasks(data);
  };

  // Crear tarea
  const addTask = async (title) => {
    await fetch(`${API_URL}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });

    await fetchTasks();
  };

  // Marcar como completada
  const toggleTask = async (id) => {
    await fetch(`${API_URL}/tasks/${id}`, {
      method: "PUT",
    });

    await fetchTasks();
  };

  // Eliminar tarea
  const deleteTask = async (id) => {
    await fetch(`${API_URL}/tasks/${id}`, {
      method: "DELETE",
    });

    await fetchTasks();
  };

  // Cargar tareas al iniciar (sin warning)
  useEffect(() => {
    const loadTasks = async () => {
      await fetchTasks();
    };

    loadTasks();
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f5f5",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "10px",
          width: "400px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
          📝 Task Manager
        </h1>

        <TaskForm onAddTask={addTask} />

        <TaskList
          tasks={tasks}
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;

