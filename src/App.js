import React, { useState } from "react";
import {
  Typography,
  Button,
  TextField,
  ListItem,
  ListItemText,
  List,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const classes = useStyles();

  const handleSubmit = () => {
    setTodos([...todos, input]);
  };

  return (
    <div>
      <Typography align="center" variant="h1">
        TODO APP
      </Typography>
      <div className="inputContainer">
        <TextField
          classes={{
            root: classes.root,
          }}
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <Button
          disabled={input === "" ? true : false}
          variant="contained"
          color="secondary"
          classes={{
            root: classes.button,
          }}
          onClick={handleSubmit}
        >
          ADD TODO
        </Button>
      </div>
      <List>
        {todos.map((todo) => (
          <ListItem>
            <ListItemText primary={todo} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default App;

const useStyles = makeStyles({
  root: {
    background: "white",
    borderRadius: 3,
    border: 0,
    color: "#1A202C",
    height: 48,
    padding: "0 30px",
    marginRight: "15px",
  },
  label: {
    textTransform: "capitalize",
  },
  button: {
    height: 48,
  },
  listItemText: {
    fontSize: 20,
  },
});
