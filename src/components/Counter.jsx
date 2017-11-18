import React, {Component} from 'react'


class Counter extends Component {

    state = {count: 1}

    incrementCount() {
        this.setState({
            count: (this.state.count || 0) + 1,
        })
    }


    render() {
        return (
            <div onClick={this.incrementCount.bind(this)}>
                {this.state.count}
            </div>
        )
    }
}


export default Counter;