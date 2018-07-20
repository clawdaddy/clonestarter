import React, { Component } from 'react';

const styles = {
    containerStyle:{
        display:'flex'
    }
}
class OverviewTracker extends Component {
    render() {
        const { title, tasks} = this.props;
        return (
            <div style={styles.containerStyle}>
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