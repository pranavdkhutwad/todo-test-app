import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { TODO_ENDPOINT_URL } from "../../constants";
import { getListByPriority } from "../../features/todo/utils";

export const fetchTasks = createAsyncThunk("todo/fetchTasks", async () => {
  const { data } = await axios.get(TODO_ENDPOINT_URL);

  return getListByPriority(data);
});

export const createTask = createAsyncThunk(
  "todo/createTask",
  async (task, thunkAPI) => {
    await axios.post(TODO_ENDPOINT_URL, task);
    thunkAPI.dispatch(fetchTasks());
  }
);

export const updateTask = createAsyncThunk(
  "todo/updateTask",
  async ({ id, task }, thunkAPI) => {
    await axios.put(`${TODO_ENDPOINT_URL}/${id}`, task);
    thunkAPI.dispatch(fetchTasks());
  }
);

export const removeTask = createAsyncThunk(
  "todo/removeTask",
  async (id, thunkAPI) => {
    await axios.delete(`${TODO_ENDPOINT_URL}/${id}`);
    thunkAPI.dispatch(fetchTasks());
  }
);

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    title: "Todo feature",
    highPriorityList: [],
    mediumPriorityList: [],
    lowPriorityList: [],
  },
  reducers: {
    updateTitle: (state, action) => {
      state.title = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.highPriorityList = action.payload.highPriorities;
      state.mediumPriorityList = action.payload.mediumPriorities;
      state.lowPriorityList = action.payload.lowPriorities;
    });
  },
});

export const { updateTitle } = todoSlice.actions;
export default todoSlice.reducer;
