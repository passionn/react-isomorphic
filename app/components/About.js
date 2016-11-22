import React from 'react'
import $ from 'jquery'

class About extends React.Component{
	constructor(props) {
    	super(props);
    	this.state={dataList:[]}
 	}

 	componentWillMount() {
 		$.ajax({
 			url:'http://localhost:9001/name',
 			method:'get',
 			success:function(data){
 				this.setState({dataList:data.list});
 			}.bind(this),
 			error:function(){

 			}
 		});
 	}

	render (){
		var img=require('../image/apple-touch-icon.png');
		var rows=[];

		this.state.dataList.forEach(function(v,k){
			rows.push(<Rowli key={k} content={v.id} />);
		});

		return (
			<div>
				<h1>Hello , React1</h1>
				<div>
					<img src={img}/>
				</div>
				<ul>
					{rows}
				</ul>
				<a href="javascript:;" onClick={this.click}>click this</a>
			</div>
		)
	}

	click(e){
		e.preventDefault();
		alert('hello react');
	}


}

class Rowli extends React.Component{
	render(){
		return (<li>{this.props.content}</li>)
	}
}

export default About;