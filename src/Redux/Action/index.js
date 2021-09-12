import { ADD_TASK,REMOVE_TASK,ADD_SUB_TASK,CHANGE_SUB_TASK } from "../../constant";


export function addTask(payload) {
    return {
      type: ADD_TASK,
      payload
    }
  }

export function removeTask(payload) {
    return {
      type: REMOVE_TASK,
      payload
    }
  }

  export function addSubTask(payload) {
    return {
      type: ADD_SUB_TASK,
      payload
    }
  }

  export function changeSubTask(payload) {
    return {
      type: CHANGE_SUB_TASK,
      payload
    }
  }