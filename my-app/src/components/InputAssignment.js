const InputAssignment = () => {
    return (
        <div>
            <div className = "input-details">
                <label>Assignment Name:</label>
                <input type = "text" placeholder="Add Assignment Name"/>
            </div>
            <div className = "input-details">
                <label>Due Date:</label>
                <input type = "text" placeholder="Add Due Date"/>
            </div>
            <div className = "input-details">
                <label>Time Needed:</label>
                <input type = "text" placeholder="Add Time Required to finish assignment"/>
            </div>

            <input type='submit' value='Add Assignment to Calender' className='submit-button'/>

        </div>
        

        
    )
}

export default InputAssignment
