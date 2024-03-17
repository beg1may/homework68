import {createAsyncThunk} from "@reduxjs/toolkit";
import {ApiTask, EditTAskArgument, Task} from "../types";
import axiosApi from "../axiosApi";

export const createTask = createAsyncThunk <void, ApiTask> (
    'todo/createTask',
    async (apiTaskData) => {
        await axiosApi.post('/tasks.json', apiTaskData)
    },
);

export const fetchTasks = createAsyncThunk <Task[]> (
    'todo/fetchTasks',
    async () => {
        const {data: apiTask} = await axiosApi.get<ApiTask | null>('/tasks.json');
        if(!apiTask) {
            return [];
        }

        let apiTasks;
        return Object.keys(apiTasks).map((id) => ({
            id,
            ...apiTasks[id]
        }));
    },
);

export const  removeTask = createAsyncThunk<void, string> (
    'todo/removeTask',
    async (taskId) => {
        await axiosApi.delete(`/tasks/${taskId}.json`);
    }
)

export const editTask = createAsyncThunk<void, EditTAskArgument>(
    'todo/editTask',
    async (apiTaskData) => {
        await axiosApi.put('/')
    }
)