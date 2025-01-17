import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { AppContext } from "../../context/AppContext";

const TaskCard = ({ id, title, category, completed }: any) => {
  const { dispatch } = React.useContext(AppContext);

  const toggleComplete = () => {
    dispatch({ type: "TOGGLE_COMPLETE", payload: id });
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography color="textSecondary">{category}</Typography>
        <Button onClick={toggleComplete}>
          {completed ? "Mark Incomplete" : "Mark Complete"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default TaskCard;