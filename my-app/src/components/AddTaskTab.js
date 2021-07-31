import React from 'react'
import Input from "./Input"
import { Button } from 'semantic-ui-react'
import App from '../App'
import TaskInput from "./TaskInput"
import SimpleMenu from "./SimpleMenu"


const AddTaskTab = () => {
    return (
        <div className="TaskTab">

            <h1>CRAMMER</h1>

            <TaskInput/>
            <SimpleMenu/>

        </div>
    )
}

export default AddTaskTab
