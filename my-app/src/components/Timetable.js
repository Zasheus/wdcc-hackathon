import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import axios from 'axios';
import moment from 'moment';
import React, { Component } from 'react';

export default class Timetable extends Component{
    constructor(props) {
        super(props);
    
        this.Timetab = this.Timetab.bind(this);
    
        this.state = {event:[],
                    cramday:[]};
      }
      componentDidMount() {
        var tasks;
        var tasksSorted = [];
        var eventContent = [];
        axios.get('http://localhost:5000/tasks/')
        .then(response => {
            tasks = response.data;
            var yearWeek;
            tasks.forEach(function (value,i){
                yearWeek = `${moment(value.dueTime).year()}-${moment(value.dueTime).isoWeek()}`;
                if (!tasksSorted[yearWeek]) {
                    tasksSorted[yearWeek]=[value];
                }
                else{
                    tasksSorted[yearWeek].push(value);
                }
            })
            for(let i in tasksSorted){
                for(let j in tasksSorted[i]){
    
                    eventContent.push({title:tasksSorted[i][j].taskName,start:tasksSorted[i][j].dueTime,durationEditable:'true'})
                }
            }
            this.setState({event:eventContent});

            var cramEvents = [];
            for(let i in tasksSorted){
                var dayInTheWeek = [];
                for(let j in tasksSorted[i]){
                    dayInTheWeek.push(moment(tasksSorted[i][j].dueTime));
                }
                var startDay = moment.min(dayInTheWeek).format('YYYY-MM-DDT23:59:59');
                if (!moment().diff(startDay,'week')){
                    this.setState({cramday:startDay})
                }
                for(let j in tasksSorted[i]){
                    var color = '#FF0000';
                    if (moment().diff(startDay,'day')){
                        color = '#3CB043';
                    }
                    var startTime = moment(startDay).subtract(tasksSorted[i][j].timeNeed,'hours').format("YYYY-MM-DDTHH:mm:ss");
                    cramEvents.push({title:tasksSorted[i][j].taskName,start:startTime,end:startDay,durationEditable:'true',
                    backgroundColor :color,borderColor:color})
                    startDay=startTime;
                }
            }
            console.log(moment(this.state.cramday).day());
            this.setState({event:cramEvents})
            
        })
        .catch((error) => {
          console.log(error);
        })
      }
      generateRandomDistraction(){
          let distractions = ['Facebook','Youtube','Netflix','Twitter','Twitch',]

          let getPosition = Math.floor(Math.random * distractions.length)

          for(let i = 0; i<distractions.length; i++){
              if(i == getPosition){
                  return distractions[i]
              }
          }

          return ('Empty')

      }
      Timetab() {
        return(
            
            <div className = "Timetable">
                <FullCalendar
                plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="timeGridWeek"
                events={this.state.event}
                allDaySlot = {false}
                weekNumberCalculation={'ISO'}
                />
            </div>
            
        )
    }

    render() {
        return<div>

            {this.Timetab()}
        </div>
            
    }
}


