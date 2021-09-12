import React, { useState } from 'react';
import './App.scss';
import { v4 } from "uuid";
import Task from './Task/task';
import { connect } from 'react-redux';
import { addTask } from './Redux/Action';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, TextareaAutosize, MenuItem, FormHelperText, FormControl, Select } from '@material-ui/core/';
import { UsbOutlined } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function App(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const classes = useStyles();

  const handleClick = () => {
    if (title != "" && description != "") {
      props.addTask({
        id: v4(),
        title,
        description,
        subTask:[]
      })
      setTimeout(() => {
        setTitle("")
        setDescription("")
      }, 400);
    }
    else {
      alert("Both field should not be empty")
    }
  }
  console.log(props.manageTask)
  return (
    <div className="App">
      <h1 className="taskHeader">ADD TASK</h1>
      <div className="form">
        <div className="title">
          <h3>Title:</h3>
          <TextField className="textField" id="outlined-basic" label="Title" variant="outlined" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="description">
          <h3>Task <br />Description: </h3>
          <TextareaAutosize className="textArea" aria-label="minimum height" minRows={7} placeholder="Enter Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
      </div>
      <Button className="saveButton" variant="contained" color="primary" onClick={handleClick}>
        Save
      </Button>
      <h3 className="taskHeader">Task List </h3>
      <div className="task">
        {props.manageTask.map((task, index) => (
          <Task
            id={task.id}
            title={task.title}
            description={task.description}
            subTask={task.subTask}
          />
        ))}
      </div>
    </div>
  );
}
const mapStateToProps = state => ({
  manageTask: state.manageTask
});
const mapDispatchToProps = dispatch => ({
  addTask: (payload) => dispatch(addTask(payload)),

});

export default connect(mapStateToProps, mapDispatchToProps)(App);