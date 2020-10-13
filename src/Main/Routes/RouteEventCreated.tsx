import React, { FC } from 'react';

import EventCreated from 'src/Components/Complex/EventCreated/EventCreated';

const RouteEventCreated: FC = props => <EventCreated {...{ ...props, title: 'New Event' }} />;

export default RouteEventCreated;
