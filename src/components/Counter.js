import React, {Component} from 'react'
import PropTypes from 'prop-types'

// React component
export default class Counter extends Component {
    render() {
        const {count, wish_value, onIncreaseClick, onUpdateClick} = this.props
        return (
            <div>
                <span>{count}</span>
                <button onClick={onIncreaseClick}>Increase</button>
                <input value={wish_value} type='text' onChange={onUpdateClick}/>
            </div>
        )
    }
}

//
// Counter.propTypes = {
//     count: PropTypes.number.isRequired,
//     onIncreaseClick: PropTypes.func.isRequired
// }
