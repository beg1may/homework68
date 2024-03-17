import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {fetchTasks} from "../store/todoThunks";
import Task from "./Task";

const Tasks = () => {
    const dispatch = useAppDispatch();
    const tasks = useAppSelector(state => state.todo.tasks);
    const fetchLoading = useAppSelector(state => state.todo.fetchLoading);
    const mutatingId = useAppSelector(state => state.todo.mutatingId);

    useEffect(() => {
        dispatch(fetchTasks());
    },[dispatch])

    return (
        <div className="d-flex flex-column gap-2">
            {tasks.map((task) => (
                <Task
                    key={task.id}
                    title={task.title}
                    done={task.done}
                    id={task.id}
                    isLoading={task.id === mutatingId}
                />
            ))}
        </div>
    );
};

export default Tasks;