import PropTypes from 'prop-types';
import { PageTitle } from 'components/PageTitle/PageTitle';
import { EventBoard } from '../EventBoard/EventBoard';
import upcomingEvents from '../../upcoming-events.json';
import { Container } from './App.styled';
// console.log(upcomingEvents[2].type);



export const App=()=> {
  return (
      <Container>
        <PageTitle text="24th Core Worlds Coalition Conference"/>
        <EventBoard events = {upcomingEvents}/>
      </Container>
  )
}

PageTitle.propTypes = {
  text: PropTypes.string.isRequired
}


