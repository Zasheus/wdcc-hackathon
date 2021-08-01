import moment from "moment";
import axios from "axios";
import { Component } from "react";

export default class GetRemainingTime extends Component{

    constructor(props){
        super(props)
        this.state = {taskString:[]}
    }

    componentDidMount() {
        axios.get('http://localhost:5000/tasks/')
            .then(response => {
                var tasks = response.data;

                // this.setState({taskString:tasks[0].dueTime})
                for(let i in tasks){
                    tasks[i].dueTime=moment(tasks[i].dueTime).add(11,'hours')
                    
                }
                for (let i in tasks){
                    // this.setState({taskString:tasks[i].dueTime})

                    // if( moment().diff(tasks[i].dueTime) < 0){
                    //     this.setState({taskString:tasks[i].dueTime})
                    //     alert('Break!')
                    //     console.log('SOMETHIHGOSDBGS')
                    // }

                    var thisWeek = []
                   if(moment(tasks[i].dueTime).isoWeek()==moment().isoWeek())
                   {
                    console.log(tasks[i].dueTime)
                    thisWeek.push(tasks[i].dueTime)
                    var out = moment.min(thisWeek)
                    var timeDiff = moment(out).diff(moment(),'seconds')
                    var outMonth = timeDiff/60/60/24/30
                   }
                    // this.setState({taskString:tasks[i].dueTime})

                }

                this.setState({taskString:outMonth.toFixed(3)})
                // this.setState({taskString:moment().toString()})
            })
            // Make an algorithm to find the next upcoming task which is not already happened
   
        
            .catch((error) => {
                console.log(error)    
            })

    }
    

    render() {
        return <div>{this.state.taskString} months</div>
    }
}
