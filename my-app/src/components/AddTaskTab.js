import React from 'react'
import Input from "./Input"
import { Button } from 'semantic-ui-react'
import App from '../App'
import TaskInput from "./TaskInput"


const AddTaskTab = () => {
    return (
        <div className="TaskTab">

            <p>ADD STUFF...</p>
            <Input/>

            <h1>INSERT TITLE </h1>

            <TaskInput/>

        </div>
    )
}

export default AddTaskTab
