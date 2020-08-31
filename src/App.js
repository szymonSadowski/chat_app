import React from "react";
import "./App.css";
// import Dashboard from "./Components/Dashboard";
import { makeStyles } from "@material-ui/core/styles";
import Store from "./Components/Store";
import ChatBody from "./Components/ChatBody"
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100vw",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>CHATAPP by @ssadowsk</h1>
      <Store>
        <ChatBody />
      </Store>
    </div>
  );
}

export default App;