import React from "react";
import { useParams, Link } from "react-router-dom";

const TaskDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Task Details</h1>
      <p>Task ID: {id}</p>
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default TaskDetails;