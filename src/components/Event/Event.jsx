import PropTypes from 'prop-types';

import css from './Event.module.css';
import { FaMapMarkerAlt, FaUserAlt, FaCalendarAlt, FaClock } from 'react-icons/fa';
// import { formatEventStart } from 'utils/formatEventStart';
// import { formatEventDuration } from 'utils/formatEventDuration';
import {formatEventStart, formatEventDuration} from 'utils';
import { iconSize } from 'contains';
// import upcomingEvents from '../../upcoming-events.json';
// console.log(upcomingEvents[0].ra);


export const Event = ({name, location, speaker, type, start, end}) =>{
    // console.log('ra', ra);
   
    const formattedStart = formatEventStart(start);
    const duration = formatEventDuration(start, end);
    
    // console.log('speaker', speaker);
    // console.log('start', start);
    

    return (

         <div className={css.event}>
            <h2 className={css.title}>{name}</h2>

            <p className={css.info}>
                <i className="icon"></i>
                {/* иконка стиль и размер */}
            <FaMapMarkerAlt className={css.icon} size={iconSize.sm}/>   
            {location }   
            </p>

            <p className={css.info}>
                <i className="icon"></i>
            <FaUserAlt className={css.icon} size={iconSize.sm}/>    
            {speaker}    
            </p>

            <p className={css.info}>
                <i className="icon"></i>
            <FaCalendarAlt className={css.icon} size={iconSize.sm}/>      
            {formattedStart}    
            </p>

            <p className={css.info}>
                <i className="icon"></i>
            <FaClock className={css.icon} size={iconSize.sm}/>     
               
            {duration}  
            </p>
        {/* {console.log(type)} */}
            <span className={`${css.chip} ${css[type]}`}>{type}</span>    

        </div>
   );
   
}

Event.propTypes = {
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    speaker: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
};