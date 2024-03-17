import React from "react";
import TaskForm from "./components/TaskForm";
import Tasks from "./components/Tasks";

function App() {

  return (
    <>
      <div className="container mt-2">
          <TaskForm />
          <hr />
          <Tasks />
      </div>
    </>
  )
}

export default App
