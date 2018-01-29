import React, {Component} from 'react'
import PropTypes from 'prop-types'

// React component
export default class Counter extends Component {
    render() {
        const {value, onIncreaseClick, onUpdateClick} = this.props
        return (
            <div>
                <span>{value}</span>
                <button onClick={onIncreaseClick}>Increase</button>
                <input type='text' onChange={onUpdateClick}/>
            </div>
        )
    }
}


Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncreaseClick: PropTypes.func.isRequired
}
