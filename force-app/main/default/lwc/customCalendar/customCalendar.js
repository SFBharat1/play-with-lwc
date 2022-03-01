import { LightningElement } from 'lwc';
// import FullCalendar from '@salesforce/resourceUrl/fullCalendar';
import { loadScript, loadStyle } from 'lightning/platformResourceLoader';
import FullCalendarJS from '@salesforce/resourceUrl/fullCalendar';

export default class CustomCalendar extends LightningElement {
    
    renderedCallback(){
        console.log('#####@@ STARTING');
        console.log(FullCalendarJS);
        Promise.all([
        // loadScript(this, FullCalendarJS + '/lib/locales-all.js'),
        // loadScript(this, FullCalendarJS + '/lib/locales-all.min.js'),
       
        loadScript(this, FullCalendarJS + '/lib/main.js'),
        loadStyle(this, FullCalendarJS + '/lib/main.css'),
        loadScript(this, FullCalendarJS + '/lib/main.min.js'),
        loadStyle(this, FullCalendarJS + '/lib/main.min.css'),

        // loadScript(this, FullCalendarJS + '/lib/jquery.min.js'),
        // loadScript(this, FullCalendarJS + '/lib/moment.min.js'),
        // loadScript(this, FullCalendarJS + '/lib/fullcalendar.min.js'),
        // loadStyle(this, FullCalendarJS + '/lib/fullcalendar.min.css'),

        ]).then(()=>{
            console.log(' PROMISS called #####');
            var calendarEl = this.template.querySelector('[data-id="calendar"]');
        
            var calendar = new FullCalendarJS.Calendar(calendarEl, {
                timeZone: 'UTC',
                initialView: 'resourceTimelineDay',
                aspectRatio: 1.5,
                headerToolbar: {
                left: 'prev,next',
                center: 'title',
                right: 'resourceTimelineDay,resourceTimelineWeek,resourceTimelineMonth'
                },
                editable: true,
                resourceAreaHeaderContent: 'Rooms',
                resources: 'https://fullcalendar.io/demo-resources.json?with-nesting&with-colors',
                events: 'https://fullcalendar.io/demo-events.json?single-day&for-resource-timeline'
            });
            
            calendar.render();
        }).catch((error)=>{
            console.log('#####@@ ERROR ON PROMIS');
            console.log(error);
        });          
    };

    elementClosest(el, selector) {
        //return closestMethod.call(el, selector);
        return el.closest(selector);
    };

}