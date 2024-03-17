import React, {useState} from "react";
import {ApiTask} from "../types";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {createTask, fetchTasks} from "../store/todoThunks";
import ButtonSpinner from "./ButtonSpinner";

const TaskForm = () => {
    const dispatch = useAppDispatch();
    const createLoading = useAppSelector(state => state.todo.createLoading);
    const [taskTitle, setTaskTitle] = useState('');

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const task: ApiTask = {
            title: taskTitle,
            done: false,
        };
        await dispatch(createTask(task));
        setTaskTitle('');
        await  dispatch(fetchTasks());
    }

    const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTaskTitle(e.target.value)

    return (
        <form onSubmit={onSubmit}>
                <input
                    type="text"
                    className="form-control"
                    value={taskTitle}
                    onChange={onTitleChange}
                />
                <button
                    className="btn btn-primary"
                    type="submit"
                    disabled={createLoading}
                >
                    {createLoading && <ButtonSpinner />}
                    Create
                </button>
        </form>
    );
};

export default TaskForm;