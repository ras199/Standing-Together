import css from 'styled-jsx/css'
export default css
`
	.page-wrap{
		height:100vh;
		display: flex;
		flex-direction: column;
		background: #fbfbfb;
	}
	.wrapper{
		display: flex;
		flex-direction: row;
		height: calc(100% - 55px);
	}
	.left-panel{
		width: 20%;
		padding: 1%;
		box-sizing: border-box;
		background-color: #fbfbfb;
		text-align: center;
	}
	.main-panel{
		width: 80%;
		padding: 1%;
		padding-left: 0;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
	}
	.results-wrap{
		overflow: auto;
		padding: 2.5% 0;
		position: relative;
	}
	.query-results{
		box-sizing: border-box;
		width: 99.9%;
	}
	.event-link{
		width: 100%;
		margin: 2.5% 0;
		background: white;
		padding: 1%;
		border: 1px solid black;
		box-sizing: border-box;
		transition: color 0.5s, background 0.5s;
	}
	.event-link:hover{
		color: black;
		background: #ffb4d0;
	}
	.event-link:active{
		background: #dc1560;
		color: white;
	}
`