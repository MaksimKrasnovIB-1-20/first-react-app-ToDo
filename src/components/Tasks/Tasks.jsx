import React from 'react'
import axios from 'axios'

import { AddTaskForm, Task } from '../index';

import EditSVG from "../../assets/images/edit.svg"

import "./Tasks.scss";

const Tasks = ({ list, onEditTitle, onAddTask, withoutEmpty }) => {

    const editTitle = () => {
        const newTitle = window.prompt('Название списка', list.name)
        if (newTitle) {
            onEditTitle(list.id, newTitle)
            axios.patch('http://localhost:3001/lists' + list.id, {
                name: newTitle
            }).catch(() => {
                alert('Не удалось обновить название списка')
            })
        }
    }

    

    return (
        <div className="tasks">
            <h2 style={{ color: list.color.hex }} className="tasks__title">{list.name} <img onClick={editTitle} src={EditSVG} alt="Edit icon" /></h2>
            <div className="tasks__items">
                {
                    !withoutEmpty && list.tasks.length && !list.tasks.length && <h2>Задачи отсутсвуют</h2>
                }
                {
                    list.tasks && list.tasks.map(task => 
                        <Task key={task.id} {...task} />
                    )
                }
                <AddTaskForm key={list.id} list={list} onAddTask={onAddTask} />
            </div>
        </div>
    )
}

export default Tasks;
