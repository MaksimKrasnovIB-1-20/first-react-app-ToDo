import React from 'react';

import "./Tasks.scss";

import EditSVG from "../../assets/images/edit.svg";

const Tasks = () => {
    return (
        <div className="tasks">
            <h2 className="tasks__title">Фронтенд <img src={EditSVG} alt="Edit icon" /></h2>
        </div>
    )
}

export default Tasks;
