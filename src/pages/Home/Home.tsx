import React from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import TaskCard from "../../components/TaskCard/TaskCard";

const Home = () => {
  const { state } = React.useContext(AppContext);

  return (
    <div>
      <h1>Task Manager</h1>
      <Link to="/task/1">View Task Details</Link>
      <div>
        {/* {state.tasks.map((task) => (
          <TaskCard key={task.id} {...task} />
        ))} */}
      </div>
    </div>
  );
};

export default Home;