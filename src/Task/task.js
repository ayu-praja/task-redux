import React, { useState } from "react";
import { connect, } from 'react-redux';
import { IconButton, Checkbox } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import { addTask, removeTask, addSubTask, changeSubTask } from "../Redux/Action";
const Task = props => {
  const handleClose = () => {
    props.removeTask({
      id: props.id
    })
  }
  const handleAdd = () => {
    props.addSubTask({
      id: props.id
    })
  }

  const changeSubTask = (index)=>{
    props.changeSubTask({
      id:props.id,
      index
    })
  }
let flag =props.subTask.length>0 ? true: false;
{props.subTask.map((item)=>{
  if(item.value === false)
    flag=false
})}
  return (
    <div className="card" style={{backgroundColor: flag === true ? 'red' :'aqua'}}>
      <div className="titleDiv">
        <p>{props.title}</p>
        <div>
          <IconButton onClick={handleAdd}>
            <AddIcon style={{ fontSize: 'medium' }} />
          </IconButton>
          <IconButton onClick={handleClose}>
            <CloseIcon style={{ fontSize: 'medium' }} />
          </IconButton>
        </div>
      </div>
      {props.description}
      <hr />
      {props.subTask.map((item, index) => {
        console.log(item)
        return <div className="check" key={index}>
          <Checkbox
            defaultChecked
            checked={item.value}
            onChange={()=>changeSubTask(index)}
            color="primary"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
          <p style={{textDecoration:item.value ? 'line-through':null}}>{item.name}</p>
        </div>
      })}


    </div>
  );
};

const mapStateToProps = state => ({
  manageTask: state.manageTask
});

const mapDispatchToProps = dispatch => ({
  removeTask: (payload) => dispatch(removeTask(payload)),
  addTask: (payload) => dispatch(addTask(payload)),
  addSubTask: (payload) => dispatch(addSubTask(payload)),
  changeSubTask:(payload) => dispatch(changeSubTask(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Task);
