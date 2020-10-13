import React, { FC } from 'react';
import FormEventCreate from 'src/Components/Complex/FormEventCreate/FormEventCreate';

const RouteEventCreate: FC = props => <FormEventCreate {...{ ...props, title: 'New Event' }} />;

export default RouteEventCreate;
