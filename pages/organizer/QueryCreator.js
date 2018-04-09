import React from 'react';
import SingleCondition from './SingleCondition';
import style from './QueryCreator.css'
// icons
import orIcon from '../../static/OR.png';
import andIcon from '../../static/AND.png';


class QueryCreator extends React.Component {

  state = {currlogicalOperator: orIcon};

  _toggleLogicalOperator(){
    console.log('this.state.currlogicalOperator 0', this.state.currlogicalOperator);
    if(orIcon === this.state.currlogicalOperator) {
      this.setState({currlogicalOperator: andIcon})
    } else {
      this.setState({currlogicalOperator: orIcon})
    }
    console.log('this.state.currlogicalOperator 1', this.state.currlogicalOperator);
  }
    render() {
        const conditions = this.props.currFilters.map((filter, index) => {
            if(index) return <div style={style.query} key={filter.id}>
                <img style={style.filterIcon} src={this.state.currlogicalOperator} alt="logical operator" onClick={() => this._toggleLogicalOperator()}/>
                    <SingleCondition condition={filter}></SingleCondition>
                </div>
            return <div style={style.query} key={filter.id}>
                    <SingleCondition condition={filter}></SingleCondition>
                </div>
        });
        return(
            <section style={{overflow: "auto", height: "100%"}}>
                <div style={style.wrapper}>
                    {conditions}
                </div>
            </section>
        )
    }
}

export default QueryCreator;
