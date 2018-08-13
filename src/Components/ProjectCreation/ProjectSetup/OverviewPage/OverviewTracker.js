import React, { Component } from 'react';

const styles = {
    containerStyle:{
        display:'flex'
    },
    mouseOverStyle:{
        display:'flex',
        cursor:'pointer'
    }
}
class OverviewTracker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            containerStyle:{
                display:'flex'
            },
            mouseOverStyle:{
                display:'flex',
                cursor:'pointer',
            },
            mouseOver:false
        }
    }
    
    render() {
        const { title, tasks} = this.props;
        return (
            <div style={ this.state.mouseOver ? this.state.mouseOverStyle : this.state.containerStyle}
                onMouseEnter={ () => this.setState({mouseOver: true})}
                onMouseLeave={ () => this.setState({ mouseOver: false})}
                onClick={ () => this.props.goToEditSection(this.props.editSectionURL)}
            >
                <p>(circle thing) </p>
                <div>
                    <h4>{title}</h4>
                    <p>{tasks}</p>
                </div>
            </div>
        );
    }
}

export default OverviewTracker;