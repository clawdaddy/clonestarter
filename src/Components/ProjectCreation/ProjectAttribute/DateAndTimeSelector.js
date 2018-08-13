import React, { Component } from 'react';

class DateAndTimeSelector extends Component {
    render() {
        return (
            <div>
                <input 
                    type='datetime-local'
                    value={this.props.value}
                    onChange={(e) => {
                        e.preventDefault()
                        this.props.callbackFn(e.target.value)
                    }}
                />
            </div>
        );
    }
}

export default DateAndTimeSelector;