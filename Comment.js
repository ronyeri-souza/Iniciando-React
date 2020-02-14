/* COMPONENTE DOS COMENTÁRIOS */

/* IMPORTANDO O REACT */
import React from 'react';


export default class Comment extends React.Component{

	render(){

		return(

			<p>{this.props.text}</p>

		);
	}

}