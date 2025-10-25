import React from "react";
import Task from "./Task";

function TaskList({ tasks, selectedCategory, onDelete }) {
  const filteredTasks = selectedCategory === "All"
    ? tasks
    : tasks.filter(task => task.category === selectedCategory);

  return (
    <div className="tasks">
      {filteredTasks.map((task, index) => (
        <Task
          key={index}
          text={task.text}
          category={task.category}
          onDelete={() => onDelete(task)}
        />
      ))}
    </div>
  );
}

export default TaskList;
