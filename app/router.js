import React from 'react'
import { Route, IndexRoute,IndexLink, Link ,Router, browserHistory } from 'react-router'

import Header from './components/header'
import App from './components/App'
import About from './components/About'
import Demo from './components/Demo'



const ACTIVE = { color: 'red' }

const Index=({children})=>(
	<div>
		<h1>Index</h1>
		<ul>
	      <li><Link      to="/"           activeStyle={ACTIVE}>/</Link></li>
	      <li><IndexLink to="/"           activeStyle={ACTIVE}>/ IndexLink</IndexLink></li>
	      <li><Link      to="/about"      activeStyle={ACTIVE}>/about</Link></li>
	      <li><Link      to="/header"      activeStyle={ACTIVE}>/header</Link></li>
	      <li><Link      to="/demo"      activeStyle={ACTIVE}>/Demo</Link></li>				
	    </ul>
		{children}
	</div>
)

export default (
	<Router history={browserHistory} >
	    <Route path="/" component={Index}>
	      <IndexRoute component={App}/>
	      <Route path="/about" component={About}/>
	      <Route path="/header" component={Header}/>
	      <Route path="/demo" component={Demo}/>				

	    </Route>
    </Router>
)