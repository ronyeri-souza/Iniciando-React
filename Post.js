/* FARÁ O PAPEL COMO SE FOSSE O "FEED DO FACEBOOK "*/

import React from 'react';

/* IMPORTANDO OS COMENTÁRIOS PARA QUE POSSAM SER USADOS NOS POSTS */
import Comment from './Comment';

/* EXPORTANDO UMA CLASSE POST QUE ESTENDE O COMPONENTE PADRÃO DO REACT */
export default class Post extends React.Component{

	/* CRIANDO A INTERFACE PARA O USUÁRIO CRIAR NOVOS COMENTÁRIOS */

	constructor(props){

		/* REPASSAR AS PROPRIEDADES DO POST PARA A CLASSE PAI DO REACT COMPONENT PARA QUE FAÇA A TRATATIVA */

		super(props);

		/* FARÁ O PAPEL COMO SE FOSSE O ESTADO DO NOSSO POST */

		this.state = {

			/* TODAS AS VARIÁVEIS QUE SERÃO USADAS NESSE POST SERÃO GUARDADAS NESSE ESTADO */

			comments:[],

			newCommentText:''
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleTextChange = this.handleTextChange.bind(this);
	}

	handleSubmit(e){
		this.setState({

			comments: [

				...this.state.comments,
				{ text: this.state.newCommentText }

			]

		 });


		this.setState({ newCommentText: '' });	

		e.preventDefault();
	}

	handleTextChange(e){

		this.setState({ newCommentText: e.target.value })
	}

	/* MÉTODO RENDER PARA RENDERIZAR O HTML QUE ESTARÁ CONTIDO NO COMPONENTE */
	
	render(){

		return(
			<div>
			<h2 class="title container">{this.props.title}</h2>
			

			<form onSubmit={this.handleSubmit} class="container">
				<div class="form-group">
				<input class="input-field" value={this.state.newCommentText} onChange={this.handleTextChange}/>
				<button class="btn btn-outline-success" type="submit">Comentar</button>
				</div>
			</form>


				{ this.state.comments.map((comment, index) =>{

						return <Comment key={index} text={comment.text} />
				}) }
			</div>
		);
	}
}