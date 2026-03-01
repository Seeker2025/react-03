import PropTypes from 'prop-types';
import {Event} from 'components/Event/Event'
import css from './EventBoard.module.css';

export const EventBoard = ({ events }) =>{
    return (
    <div className={css.EventBoard}>
        
        {events.map(({ name, location, speaker, type, time }) =>(
          
            <Event 
                    key = {name}
                    name = {name}
                    location ={location}
                    speaker = {speaker}
                    tpye={type}
                    start={time.start}
                    end ={time.end}
                              
                    />

        ))}
        
        </div>
    );
}