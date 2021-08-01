import { useState } from "react"
import axios from "axios";

const InputAssignment = () => {

    const[text, setText] = useState('')
    const[date, setDate] = useState('')
    const[time, setTime] = useState('')
    const task = {
        taskName: text,
        dueTime: date,
        timeNeed: time
    }
    const onSubmit = (e) => {

        e.preventDefault()

        if(!text){
            alert('Please add assignment')
            return
        }
        task.timeNeed = task.timeNeed/2
        axios.post('http://localhost:5000/tasks/add',task).then(res => console.log(res.data));
        alert('ASSIGNMENT SUBMITTED')
        window.location.reload(false);
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className = "input-details">
                <label>Assignment:</label>
                <input type = "text" placeholder="Add Assignment Name" 
                value = {text}
                onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className = "input-details">
                <label>Due Date:</label>
                <input type = "date" placeholder="Add Due Date" 
                value = {date}
                onChange={(e) => setDate(e.target.value)}
                />
            </div>
            <div className = "input-details">
                <label>Hours Needed:</label>
                <input type = "number" placeholder=" Time Required" 
                value = {time}
                onChange={(e) => setTime(e.target.value)}
                />
            </div>

            <input type='submit' value='Add Assignment to Calendar' className='submit-button'/>

        </form>
        

        
    )
}

export default InputAssignment
