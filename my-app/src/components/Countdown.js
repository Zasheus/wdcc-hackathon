import axios from 'axios';
import moment from 'moment';

const Countdown = () => {

    const someFunction = () => {
        axios.get('http://localhost:5000/tasks/')
            let returnValue = "tes"
            .then(response => {
                let tasks = response.data;

                for (let task in tasks){

                    if(task.dueTime >= moment()){
                        console.log("YES")
                        
                    }

                }

            })
            // Make an algorithm to find the next upcoming task which is not already happened
   
        
            .catch((error) => {
                console.log(error)
            })
            

            
        return(
        <p>WORD</p>
        )
            
    }

    return (
        <div className = 'countdown'>
            <h3>Time left before needing to start assignment:</h3>

            <someFunction/>

            <div>XDDD {someFunction}</div>

            {/* Get info from data base. */}

            

        </div>
    )
}

export default Countdown
