import React from "react";

export default class Body extends React.Component {
	render() {
		return (
		  <div>
			<div className="row text-center">
			  <h2>ReactJS, Webpack, Babel, and Bootstrap</h2>
			  <p className="lead">A Lightweight Boilerplate</p>
			</div>
			<br />
			<div className="container-fluid">
				<div className="row text-center">
					<p>
						Use this boilerplate as a way to quickly start any new project.<br />
						This page is being generated by the <code>App.jsx</code> file in <code>resources/jsx</code>
					</p>
					<p><a href="https://github.com/petercunha">Check out the project on GitHub</a></p>
				</div>
			</div>
		  </div>
		);
	}
}