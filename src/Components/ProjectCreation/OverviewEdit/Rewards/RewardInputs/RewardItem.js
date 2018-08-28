import React, { Component } from 'react';

class RewardItem extends Component {
    render() {
        return (
            <div>
                <div>

                    {/* item title */}
                    <p>title</p>
                    <div>
                        <a>edit</a>
                        <p>|</p>
                        <a>remove</a>
                    </div>
                </div>
                <div>
                    {/* decrease number of item */}
                    <button>-</button>
                    {/* number of item */}
                    <p></p>
                    {/* increase number of item */}
                    <button>+</button>
                </div>
            </div>
        );
    }
}

export default RewardItem;