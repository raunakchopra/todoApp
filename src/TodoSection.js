import React from "react";
import db from "./firebase";
import {
  Typography,
  ListItem,
  ListItemText,
  List,
  IconButton,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import EditIcon from "@material-ui/icons/Edit";

function TodoSection(props) {
  const todos = props.todoData;

  return (
    <div className="listConatiner">
      <List>
        {todos.map((todo) => (
          <ListItem>
            <ListItemText
              primary={
                <Typography variant="h4">
                  {todo.todo}
                  <IconButton>
                    <CloseIcon
                      className="closeIcon"
                      fontSize="large"
                      onClick={() =>
                        db.collection("todos").doc(todo.id).delete()
                      }
                    />
                  </IconButton>
                  {/* <IconButton>
                    <EditIcon fontSize="large" className="editIcon" />
                  </IconButton> */}
                </Typography>
              }
              inset={true}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default TodoSection;
