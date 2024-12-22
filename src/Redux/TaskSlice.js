import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    TasksData: {
    Today: [],
    ThisWeek: [],
    ThisMonth: [],
  },
};

const TaskSlice = createSlice({
    name: "Tasks",
    initialState,
    reducers: {
      setTasks(state, action) {
        state.TasksData = action.payload;
      },
      updateTasks(state, action) {
        const { TasksType, userTime, userTasks, activeTab } = action.payload;
   
        const TaskListKey = `${activeTab.toLowerCase()}Files`;
        const TaskList = state.TasksData[TaskListKey];
  
        const fileIndex = TaskList.findIndex((file) => file.name === TasksType);
        if (fileIndex !== -1) {
            TaskList[fileIndex].time = userTime;
            TaskList[fileIndex].task = userTasks;
        }
      },
    },
})

export const { setTasks, updateTask } = TaskSlice.actions;
export default TaskSlice.reducer;