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
        this.generateRandomDistraction = this.generateRandomDistraction.bind(this);
    
        this.state = {event:[],
                    cramday:[],
                    chillDays:[]};
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
                if (moment().isoWeek()==moment(startDay).isoWeek()){
                    this.setState({cramday:startDay})
                }
                for(let j in tasksSorted[i]){
                    var color = '#FF0000';
                    if (moment().diff(this.state.cramday,'day')){
                        color = '#3CB043';
                    }
                    var startTime = moment(startDay).subtract(tasksSorted[i][j].timeNeed,'hours').format("YYYY-MM-DDTHH:mm:ss");
                    cramEvents.push({title:tasksSorted[i][j].taskName,start:startTime,end:startDay,durationEditable:'true',
                    backgroundColor :color,borderColor:color})
                    startDay=startTime;
                }
            }
            var thisMonday = moment(this.state.cramday).subtract(moment(this.state.cramday).isoWeekday()-1,'day');
            var restDays = [];
            for (let i=0;i<7;i++) {
                var thisWeekDay=moment(thisMonday).add(i,'day');
                if(this.state.cramday.length!=0){
                    if (moment(thisWeekDay).diff(this.state.cramday,'day')){
                        restDays.push({title:this.generateRandomDistraction(),start:moment(thisWeekDay).format('YYYY-MM-DDT06:00:01'),
                        end:moment(thisWeekDay).format('YYYY-MM-DDT09:00:00'),durationEditable:'true'})
                    }
                }
                else{
                    restDays.push({title:this.generateRandomDistraction(),start:moment(thisWeekDay).format('YYYY-MM-DDT06:00:01'),
                        end:moment(thisWeekDay).format('YYYY-MM-DDT09:00:00'),durationEditable:'true'})
                }
            }
            this.setState({chillDays:restDays});
            this.setState({event:cramEvents.concat(restDays)});
            
        })
        .catch((error) => {
          console.log(error);
        })
      }
      generateRandomDistraction(){
          var distractions = ['browse Facebook','watch Youtube','watch Netflix','browse Twitter','watch Twitch',
          'play CS go','play Fortnite', 'play League of Legends','play Valorant']

          var getPosition = Math.floor(Math.random() * distractions.length)
          for(let i = 0; i<distractions.length; i++){
              if(i == getPosition){
                  return 'Try: '+distractions[i]
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


