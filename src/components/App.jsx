import PropTypes from 'prop-types';
import { PageTitle } from 'components/PageTitle/PageTitle';
import { EventBoard } from './EventBoard/EventBoard';
import upcomingEvents from '../upcoming-events.json';
console.log(upcomingEvents);



export const App=()=> {
  return (
      <div>
        <PageTitle text="24th Core Worlds Coalition Conference"/>
        <EventBoard events = {upcomingEvents}/>
      </div>
  )
}

PageTitle.propTypes = {
  text: PropTypes.string.isRequired
}


