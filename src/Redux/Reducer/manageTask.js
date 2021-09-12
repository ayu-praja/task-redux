import { ADD_TASK, REMOVE_TASK, ADD_SUB_TASK, CHANGE_SUB_TASK } from "../../constant";
import task from "../../Task/task";

const initialState = [];

export default function manageTaskReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TASK:
            return [...state, { ...action.payload }];

        case REMOVE_TASK:
            return state.filter(el => el.id !== action.payload.id);
        case ADD_SUB_TASK:
            return state.map(item => {
                if (item.id === action.payload.id) {
                   item.subTask.push({ value: false, name: `checklist ${item.subTask.length+1}` })
                    return item
                }
                return item
            })
        case CHANGE_SUB_TASK:
            return state.map((item, index) => {
                if (item.id === action.payload.id) {
                    item.subTask[action.payload.index].value = !item.subTask[action.payload.index].value;
                    return item;
                }
                return item;
            })

        default: {
            return state;
        }

    }
}

