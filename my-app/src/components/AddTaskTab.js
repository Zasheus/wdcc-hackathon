import React from 'react'
import Input from "./Input"
import { Button } from 'semantic-ui-react'
import App from '../App'
import TaskInput from "./TaskInput"


const AddTaskTab = () => {
    return (
        <div className="TaskTab">

            <h1>Cram Timetable Planner </h1>

            <TaskInput/>

        </div>
    )
}

export default AddTaskTab
