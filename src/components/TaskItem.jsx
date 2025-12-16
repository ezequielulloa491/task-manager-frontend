function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        border: "1px solid #ddd",
        borderRadius: "6px",
        marginBottom: "8px",
        background: task.completed ? "#e0ffe0" : "white",
      }}
    >
      <span
        onClick={() => onToggle(task.id)}
        style={{
          cursor: "pointer",
          textDecoration: task.completed ? "line-through" : "none",
        }}
      >
        {task.title}
      </span>

      <button
        onClick={() => onDelete(task.id)}
        style={{
          background: "red",
          color: "white",
          border: "none",
          borderRadius: "4px",
          padding: "4px 8px",
          cursor: "pointer",
        }}
      >
        ✖
      </button>
    </div>
  );
}

export default TaskItem;
