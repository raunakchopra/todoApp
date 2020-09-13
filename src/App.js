import React, { useState, useEffect } from "react";
import firebase from "firebase";
import db from "./firebase";
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

  useEffect(() => {
    db.collection("todos").onSnapshot((snapshot) => {
      setTodos(snapshot.docs.map((doc) => doc.data().todo));
    });
  }, []);

  const handleSubmit = () => {
    db.collection("todos").add({
      todo: input,
    });

    setInput("");
  };

  const classes = useStyles();

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
