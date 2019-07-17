import React from 'react';
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faTrashAlt, faPenSquare} from '@fortawesome/fontawesome-free-solid'
fontawesome.library.add(faTrashAlt, faPenSquare);

export default class InputRow extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			fields: props['fields'],
			handlePost: props['handlePost'],
			handleChange: props['handleChange'],
			handleFocus: props['handleFocus'],
			handleDelete: props['handleDelete'],
			handleEditToggle: props['handleEditToggle'],
			rowIndex: props['rowIndex'],
			isFocused: props['isFocused']
		};
		this.firstInput = React.createRef();
	}
	
	componentWillReceiveProps(nextProps) {
		if(nextProps.isFocused&&!this.state.isFocused) {
			this.firstInput.current.focus();
		}
		if(nextProps.isFocused !== this.state.isFocused){
			this.setState({isFocused: nextProps.isFocused});
		}
	}
	
	syncStateToInput=function(event){
		this.state.handleChange(event.target.name, event.target.value, this.state.rowIndex);
	}.bind(this);

	handleKeyPress=function(event, field){
		if(event.key === 'Enter' || event.key === 'Tab'){
			if(field.postOnTab){
				this.handlePost(this.state.rowIndex);
				event.preventDefault();
			}
		}
		if(event.key === 'Backspace'){
			if(this.state.fields[0] === field){
				let isEmpty = true;
				for(let i = 0; i < this.state.fields.length; i++){
					if(this.props.values[this.state.fields[i].name]){
						isEmpty = false;
						break;
					}
				}
				if(isEmpty){
					this.handleDelete();
					event.preventDefault();
				}
			}
		}
	}.bind(this);
	
	handlePost = function(){
		//TODO: validate input here if needed
		this.state.handlePost(this.state.rowIndex);
	}.bind(this);
	
	handleFocus = function(event){
		event.target.removeAttribute("readonly");
		this.setState({isFocused: true}, ()=>{
			this.state.handleFocus(this.state.rowIndex)
		});
	}.bind(this);
	
	handleDelete = function(){
		this.state.handleDelete(this.state.rowIndex);
	}.bind(this);

	handleEditToggle = function(){
		this.state.handleEditToggle(this.state.rowIndex);
	}.bind(this);
	
	render() {
		const rowValues = this.props.values;
		const deleteRow =
			<td className="delete-row-wrap">
				<FontAwesomeIcon className="delete-row" icon="trash-alt" onClick={this.handleDelete}/>
			</td>;
		const editRow =
			<td className="delete-row-wrap">
				<FontAwesomeIcon className="delete-row" icon="pen-square" onClick={this.handleEditToggle}/>
			</td>;
		//filler tag in case no row action is appropriate - without it, the layout gets all messed up
		const noAction =
			<td className="delete-row-wrap"> </td>;
		return (
			<tbody className="row-wrap">
				<tr className="row-margin">
					<td/>{this.state.fields.map((f, i) => {return <td key = {"field_input_" + this.props.rowIndex + "_" + i}/>})}
				</tr>
				<tr onClick={this.handleFocus}>
					{rowValues.locked ? editRow : rowValues.saved ? noAction : deleteRow}
					{this.state.fields.map((f, i) => {
						return <React.Fragment key = {"field_input_" + this.props.rowIndex + "_" + i}>
							{f.margin?<td className="col-margin"/>:null}
							<td className = {rowValues[f.name+"Valid"]?"":"invalid"}>
								<input value = {rowValues[f.name]} type={f.type} name={f.name}
									   onChange = {this.syncStateToInput} onFocus = {(event) => {this.handleFocus(event)}} ref = {i === 0 ? this.firstInput : ""}
									   autoFocus = {i === 0} disabled = {rowValues.locked}
									   onKeyDown = {(event)=>{this.handleKeyPress(event, f)}}
									   list = {f.name + "-data-list"}
									   autoComplete = "new-password"
								/>
							</td>
							{f.margin?<td className="col-margin"/>:null}
						</React.Fragment>;
					})}
				</tr>
				<tr className="row-margin">
					<td/>{this.state.fields.map((f, i) => {return <td key={"field_input_"+this.props.rowIndex+"_"+i}/>})}
				</tr>
			</tbody>
		);
	}
}