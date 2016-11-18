import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import routers from './router'

/*render(
	<Router routers={routers} history={browserHistory} />,
	document.getElementById('root')
);
*/

render(
	routers,
	document.getElementById('root')
);
