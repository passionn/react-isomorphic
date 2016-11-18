import React from 'react'

class Header extends React.Component{
	constructor(props) {
    	super(props);
 	}
	render (){
		var img=require('../image/apple.png');
		return (
			<div>
				<h1>Hello , React</h1>
				<div>
					<img src={img}/>
				</div>
			</div>
		)
	}
}

export default Header