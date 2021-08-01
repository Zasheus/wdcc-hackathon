import React from 'react'
import TaskInput from "./TaskInput"
import SimpleMenu from "./SimpleMenu"
import Countdown from "./Countdown"


const AddTaskTab = () => {
    return (
        <div className="TaskTab">

            <h1>Cram Timetable Planner </h1>

            <TaskInput/>
            <SimpleMenu/>

            <Countdown/>

        </div>
    )
}

export default AddTaskTab
