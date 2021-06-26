import React from 'react'
import './style.css'
import Add_event from "../../components/Add_event";

const Agenda = () => (
  <>
  <Add_event />
<div className= "Agenda_container">
<iframe className= "Agenda" src="https://calendar.google.com/calendar/embed?src=dv65fm3h31jdg5g41de7nti6qk%40group.calendar.google.com&ctz=Europe%2FParis"></iframe>
</div>
</>
)

export default Agenda
