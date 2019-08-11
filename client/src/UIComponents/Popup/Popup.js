import React from 'react';

export default class Popup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			toggleVisibility: props.toggleVisibility,
			width: props.width
		};
	}
	handleBackgroundClick() {
		this.state.toggleVisibility();
	}
	render() {
		return this.props.visibility?(
			<div className="popup-wrapper">
				<style>
                    {/**
					.popup-wrapper{
						position: fixed;
						height: 100%;
						width: 100%;
						top: 0;
					}
					
					.popup-background{
						position: absolute;
						height: 100%;
						width: 100%;
						background-color: rgba(82, 86, 89, 0.75);
						z-index: 0;
					}
					.popup {
						position: relative;
						margin: 10vh auto;
						width: 50%;
						max-height: 80vh;
						color: white;
						background-color: rgb(144, 39, 142);
						padding: 2.5%;
						z-index: 1;
						box-shadow: 0px 1px 5px 0px black;
					}
					.popup a:link {
						color: #fff;
					}
					.popup a:visited {
						color: #fff;
					}
					.popup a:hover {
						color: #fff;
					}
					.popup a:active {
						color: #fff;
					}

					@media only screen and (max-width: 480px){
    				    .popup{
    				        width: 85%;
    				    }
    				}**/}
                </style>
				<div className="popup-background" onClick={this.handleBackgroundClick.bind(this)}></div>
				<div className="popup">
					{this.props.children}
				</div>
			</div>
		):<div></div>
	}
}
