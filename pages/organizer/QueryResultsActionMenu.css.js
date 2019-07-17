import css from 'styled-jsx/css'
export default css`
	.query-results-wrapper{
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		background-color: #eee;
		border-bottom: 1px solid #888;
		padding: 0.6em;
		padding-bottom: 0;
		flex: 0 0 auto;
	}
	.results-count{
		display: inline-block;
		padding: 0px 0px 16px 20px;
		color: rgba(86, 95, 108, 0.9);
		font-size: 24px;
		line-height: 24px;
		font-weight: 700;
		text-align: center;
	}
	.action-button{
		margin: 0px 10px 7.5px 10px;
		padding: 0px 10px 0px 12px;
		color: rgb(100, 109, 114);
		font-size: 20px;
		font-weight: 500;
		text-align: center;
		cursor: pointer;
	}
	.action-button.align-to-end{
		margin-left: 0;
		padding-left: 0;
		margin-right: auto;
	}
	.action-button-icon{
		font-size: 14px;
		height: 14px;
		margin-left: 5px;
	}
`