import React from 'react';
import PropTypes from 'prop-types';

export const CalendarEvent = ({ event }) => {
    const { title, user } = event;
    return (
        <div>
            <strong> {title} </strong>
            <strong>- {user.name} </strong>
        </div>
    );
};

CalendarEvent.propTypes = {
    event: PropTypes.object
};
